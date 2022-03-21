import React from "react";
import styled from "styled-components";
import { color } from "../common/styled";
import { ReactComponent as StarRating } from "../../svg/ic-star-rating.svg";
import { ReactComponent as Heart } from "../../svg/ic-heart.svg";

const SearchItem = () => {
  return (
    <>
      <WrapStyle>
        <ImgBox>
          <img src="/img/aboutHostingImage.jpg" />
        </ImgBox>
        <TextBox>
          <div className="info-text">
            <p>(위치)의 (주택 종류) 전체</p>
            <h3>(설정한 숙소 이름)</h3>
            <p className="virtual"></p>
            <p>최대 인원 (n)명</p>
          </div>
          <div className="star-rating">
            <StarRating />
            <p className="rating">점수</p>
            <p className="review">(후기 (n)개)</p>
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
  border: 1px solid ${color.medium_gray2};
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
