import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import axios from "axios";
import { color } from "../common/styled";
import { ReactComponent as Star } from "../../svg/ic-star.svg";

const HouseInfo = () => {
  //집 api
  const houseInfo = useSelector((state) => state.storeHouseIdxReducer);

  const [smallType, setSmallType] = useState("");
  const [houseName, setHouseName] = useState("");
  const [houseImg, setHouseImg] = useState("");

  //-------------------------api-------------------------
  useEffect(async () => {
    try {
      const res = await axios({
        baseURL: "http://joon-serverlab.shop/",
        method: "get",
        url: `app/houses/by-house/${houseInfo.houseIdx}`,
        params: { houseIdx: houseInfo.houseIdx },
      });
      setHouseName(res.data.result[0].houseName);
      setHouseImg(res.data.result[0].houseImg);
      if (res.data.result[0].smallType === "W") setSmallType("전체");
      if (res.data.result[0].smallType === "P") setSmallType("개인실");
      if (res.data.result[0].smallType === "S") setSmallType("다인실");
    } catch (e) {
      console.log(e);
    }
  }, []);
  return (
    <HouseStyle>
      <img src={houseImg} alt="숙소사진" />
      <div className="right">
        <div>
          <p>주거용 공간 {smallType}</p>
          <h3>{houseName}</h3>
        </div>
        <div className="star">
          <StarStyle />
          <span>별점</span>
          <span>후기 몇개</span>
        </div>
      </div>
    </HouseStyle>
  );
};

export default HouseInfo;

const HouseStyle = styled.div`
  display: flex;
  justify-content: flex-start !important;
  padding-bottom: 2rem;
  img {
    border-radius: 1rem;
    margin-right: 1rem;
    width: 12rem;
    height: 10rem;
  }
  p {
    font-size: 1.2rem;
    color: ${color.medium_gray2};
    margin-bottom: 0.6rem;
  }
  h3 {
    font-size: 1.4rem;
    color: ${color.dark_gray};
  }

  .right {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .star {
    display: flex;
    align-items: center;
    span:nth-child(2) {
      font-weight: 500;
      font-size: 1.2rem;
      color: ${color.dark_gray};
      margin-right: 3px;
    }
    span:nth-child(3) {
      font-size: 1.2rem;
      color: ${color.medium_gray2};
    }
  }
`;

const StarStyle = styled(Star)`
  fill: ${color.Main};
  transform: scale(0.7);
  padding-bottom: 3px;
`;
