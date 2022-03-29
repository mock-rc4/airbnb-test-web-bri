import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { flexCenter, color } from "../common/styled";
import SearchItem from "./SearchItem";

const SearchListSection = () => {
  //local state
  const [num, setNum] = useState(10);
  const [datas, setDatas] = useState([]);

  //redux 저장 값으로 뿌려주기
  const searchInfo = useSelector((state) => state.searchHouseReducer);
  const [loc, setLoc] = useState(searchInfo.location);
  const [checkin, setCheckin] = useState(searchInfo.checkin);
  const [checkout, setCheckout] = useState(searchInfo.checkout);
  const [people, setPeople] = useState(searchInfo.people);
  const [facility, setFacility] = useState("");

  useEffect(() => {
    search();
  }, [searchInfo.location]);

  //------------api------------------
  const search = async () => {
    try {
      const res = await axios({
        method: "get",
        url: `app/houses?loc=${loc}&str=${checkin}&end=${checkout}&ppl=&facility=`,
        baseURL: "http://joon-serverlab.shop/",
      });
      console.log(res);
      setDatas(res.data.result);
    } catch (e) {
      console.log(e);
    }
  };
  //---------------------------------

  return (
    <>
      <WrapStyle>
        <div className="list-section">
          <div className="info-text-section">
            <p>
              지도에 표시된 지역에 위치한 {datas ? `${datas.length}` : "0"}개
              이상의 숙소
            </p>
            <p>
              여행 날짜와 게스트 인원수를 입력하면 1박당 총 요금을 확인할 수
              있습니다.
            </p>
            <p>
              예약하기 전에 코로나19 관련 여행 제한 사항을 확인하세요.{" "}
              <a>자세히 알아보기</a>
            </p>
          </div>

          <div className="item-section">
            {!datas ? (
              <p className="non-search">검색 결과가 없습니다.</p>
            ) : (
              datas.map((item, index) => (
                <SearchItem
                  key={index}
                  houseImg={item.houseImg}
                  gu={item.gu}
                  bigType={item.bigType}
                  smallType={item.smallType}
                  houseName={item.houseName}
                  reviewStar={item.reviewStar}
                  reviewCount={item.reviewCount}
                  houseGuest={item.houseGuest}
                  houseBed={item.houseBed}
                  houseRoom={item.houseRoom}
                  houseBath={item.houseBath}
                  housePrice={item.housePrice}
                  totalPrice={item.totalPrice}
                />
              ))
            )}

            {/* 필요한거 : houseImg, gu, bigType, smallType, houseName, reviewStar, reviewCount, houseGuest, houseBed, houseRoom,ㄴhouseBath,  */}
          </div>
        </div>
      </WrapStyle>
    </>
  );
};

export default SearchListSection;

const WrapStyle = styled.section`
  width: 100%;
  box-sizing: border-box;

  display: flex;
  justify-content: center;

  .list-section {
    width: 94%;
  }

  .info-text-section {
    border-bottom: 1px solid ${color.medium_gray};
    padding-top: 3rem;
    p {
      font-size: 1.4rem;
      padding-bottom: 2.7rem;
      color: ${color.dark_gray};

      &:nth-child(2) {
        color: ${color.medium_gray2};
      }
    }
  }

  .item-section {
    .non-search {
      text-align: center;
      font-size: 1.6rem;
      color: ${color.medium_gray2};
      margin-top: 10rem;
    }
  }
`;
