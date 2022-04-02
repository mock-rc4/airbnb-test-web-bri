import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { color, flexCenter } from "../common/styled";
import axios from "axios";

const BoxPrice = ({ infotext }) => {
  const houseInfo = useSelector((state) => state.storeHouseIdxReducer);
  const dateInfo = useSelector((state) => state.searchHouseReducer);
  const [housePrice, setHousePrice] = useState("");
  const [commission, setCommission] = useState("");
  function comma(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  //----------------api----------------------
  useEffect(async () => {
    houseInformationApi();
    calculateApi();
  }, []);

  //-----------------------------------------

  const houseInformationApi = async () => {
    try {
      const res = await axios({
        baseURL: "http://joon-serverlab.shop/",
        method: "get",
        url: `app/houses/by-house/${houseInfo.houseIdx}`,
        params: { houseIdx: houseInfo.hostIdx },
      });
      setHousePrice(res.data.result[0].housePrice);
    } catch (e) {
      console.log(e);
    }
  };

  const calculateApi = async () => {
    try {
      const res = await axios({
        baseURL: "http://joon-serverlab.shop/",
        method: "get",
        url: `/app/houses/search/variable-price?houseIdx=${houseInfo.houseIdx}&str=${dateInfo.checkin}&end=${dateInfo.checkout}&ppl=${dateInfo.people}`,
      });
      console.log(res);
      setCommission(res.data.result.commission);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <WrapperStyle>
      {dateInfo.stayDay && (
        <>
          {infotext && <p>예약 확정 전에는 요금이 청구되지 않습니다.</p>}
          <div className="price-section">
            <div className="price">
              <span>
                ₩{comma(housePrice)} ✕ {dateInfo.stayDay}박
              </span>
              <p>₩{comma(housePrice * dateInfo.stayDay)}</p>
            </div>
            <div className="price">
              <span>청소비</span>
              <p>₩{comma(housePrice * 0.1)}</p>
            </div>
            <div className="price">
              <span>서비스 수수료</span>
              <p>₩{commission}</p>
            </div>

            <div className="total-price">
              <span>총 합계</span>
              <p>
                ₩
                {comma(
                  housePrice * dateInfo.stayDay +
                    housePrice * 0.1 +
                    housePrice * 0.06
                )}
              </p>
            </div>
          </div>
        </>
      )}
    </WrapperStyle>
  );
};

export default BoxPrice;

const WrapperStyle = styled.div`
  width: 100%;
  box-sizing: border-box;
  ${flexCenter};
  flex-direction: column;

  & > p {
    margin: 2rem;
    font-size: 1.4rem;
    color: ${color.dark_gray};
  }

  .price-section {
    width: 100%;
    box-sizing: border-box;
    margin-top: 0.5rem;
    .price {
      display: flex;
      justify-content: space-between;
      font-size: 1.6rem;
      color: ${color.dark_gray};
      padding-bottom: 1rem;
      line-height: 2rem;
      span {
        text-decoration: underline;
      }
    }
    .total-price {
      line-height: 2rem;
      display: flex;
      justify-content: space-between;
      padding-top: 2rem;
      margin-top: 1rem;
      border-top: 1px solid ${color.medium_gray};
      font-size: 1.6rem;
      font-weight: 600;
    }
  }
`;
