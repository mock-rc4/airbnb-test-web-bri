import axios from "axios";
import React from "react";
import styled from "styled-components";
import { ReactComponent as Heart } from "../../svg/ic-heart.svg";
import { color, flexCenter } from "../common/styled";

const WishItem = ({
  gu,
  houseBath,
  houseBed,
  houseGuest,
  houseIdx,
  houseImg,
  houseName,
  houseRoom,
  wishIdx,
}) => {
  const handleDeleteWish = async () => {
    try {
      const res = await axios({
        baseURL: "http://joon-serverlab.shop/",
        method: "patch",
        url: `app/wish-list/delete/${wishIdx}`,
      });
      if (res.data.isSuccess) alert("위시리스트에서 삭제되었습니다.");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <WrapperStyle>
      <div className="img-section">
        <img src={houseImg}></img>
      </div>
      <div className="text-section">
        <div className="title-section">
          <h2 className="title">{houseName} </h2>

          <HeartStyle onClick={handleDeleteWish} />
        </div>
        <div className="content-section">
          <p className="condition">
            최대 인원 {houseGuest}명 ・ 침실 {houseRoom}개 ・ 침대 {houseBed}개
            ・ 욕실 {houseBath}개
          </p>
        </div>
      </div>
    </WrapperStyle>
  );
};

export default WishItem;

const WrapperStyle = styled.div`
  width: 100%;
  height: fit-content;

  .img-section {
    border-radius: 1rem;
    width: 100%;
    height: 20rem;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .title-section {
    ${flexCenter}
    justify-content: space-between;
  }
  .title {
    font-size: 2.2rem;
    font-weight: 600;
    padding: 1.5rem 0 1rem;
    span {
      font-size: 1.2rem;
      color: ${color.medium_gray2};
      text-decoration: underline;
    }
  }
  .condition {
    font-size: 1.4rem;
    color: ${color.medium_gray2};
  }
`;

const HeartStyle = styled(Heart)`
  fill: ${color.Main};
  stroke: ${color.Main};
  &:active {
    transform: scale(0.9);
    transition: transform 0.1s ease;
    fill: white;
    stroke: black;
  }
`;
