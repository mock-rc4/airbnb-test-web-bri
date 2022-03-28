import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { color } from "../common/styled";
import { ReactComponent as StarRating } from "../../svg/ic-star-rating.svg";
import { ReactComponent as Heart } from "../../svg/ic-heart.svg";

const SearchItem = ({
  houseImg,
  gu,
  bigType,
  smallType,
  houseName,
  reviewStar,
  reviewCount,
  houseGuest,
  houseBed,
  houseRoom,
  houseBath,
  housePrice,
  totalPrice,
}) => {
  const [big, setBig] = useState(bigType);
  const [small, setSmall] = useState(smallType);

  useEffect(() => {
    if (bigType === "A") setBig("아파트");
    if (bigType === "H") setBig("주택");
    if (bigType === "N") setBig("별채");

    if (smallType === "W") setSmall("전체");
    if (smallType === "P") setSmall("개인실");
    if (smallType === "S") setSmall("다인실");
  });

  //콤마
  function comma(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return (
    <>
      <WrapStyle>
        <ImgBox>
          <img src={houseImg} />
        </ImgBox>
        <TextBox>
          <div className="info-text">
            <p>
              {gu}의 {big} {small}
            </p>
            <h3>{houseName}</h3>
            <p className="virtual"></p>
            <p>
              최대 인원 {houseGuest}명 ・ 침실 {houseRoom}개 ・ 침대 {houseBed}
              개 ・ 욕실 {houseBath}개
            </p>
          </div>
          <div className="bottom">
            <div className="star-rating">
              <StarRating />
              <p className="rating">{reviewStar}</p>
              <p className="review">(후기 {reviewCount}개)</p>
            </div>
            <div className="money">
              <p>
                ₩{comma(housePrice)} <span>/ 박</span>
              </p>
              <span>총액 ₩{comma(totalPrice)}</span>
            </div>
          </div>
          <HeartStyle />
        </TextBox>
      </WrapStyle>
    </>
  );
};
export default SearchItem;
const WrapStyle = styled.div`
  width: 100%;
  border-bottom: 1px solid ${color.medium_gray};
  padding: 2.5rem 0;
  display: grid;
  grid-template-columns: 30rem auto;
  cursor: pointer;
`;

const ImgBox = styled.div`
  width: 30rem;
  height: 19.5rem;
  border: 1px solid ${color.medium_gray};
  border-radius: 1.2rem;

  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
  }
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 2rem;
  box-sizing: border-box;
  position: relative;

  .virtual::after {
    content: "-------";
    color: white;
    border-bottom: 1px solid ${color.medium_gray};
  }

  .info-text {
    p:nth-child(1),
    p:nth-child(4),
    span {
      font-size: 1.4rem;
      color: ${color.medium_gray2};
      font-weight: 350;
      margin-top: 2px;
      margin-bottom: 1rem;
    }
    //가상요소임
    p:nth-child(3) {
      margin-bottom: 1.4rem;
    }

    h3 {
      font-size: 1.8rem;
      color: ${color.dark_gray2};
    }
  }

  .bottom {
    display: flex;
    justify-content: space-between;
    align-items: end;
  }

  .star-rating {
    display: flex;
    align-items: center;
    margin-bottom: 2px;
    fill: ${color.Main};
    font-size: 1.4rem;

    .rating {
      margin: 0 0.3rem;
    }

    .review {
      color: ${color.medium_gray2};
    }
  }
  .money {
    text-align: end;
    p {
      font-weight: 800;
      font-size: 1.8rem;
      margin-bottom: 0.6rem;
      span {
        font-weight: 400;
        color: ${color.dark_gray};
      }
    }
    & > span {
      font-size: 1.4rem;
      color: ${color.medium_gray2};
      text-decoration: underline;
    }
  }
`;

const HeartStyle = styled(Heart)`
  border-radius: 50%;
  padding: 1rem;
  position: absolute;
  top: -1rem;
  right: -1rem;

  &:hover {
    background: ${color.light_gray};
  }
`;
