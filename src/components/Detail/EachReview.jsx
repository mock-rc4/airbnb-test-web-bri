import React from "react";
import styled from "styled-components";
import { color, flexCenter } from "../common/styled";

const EachReview = () => {
  //여기서 api 불러서 map 으로 쫙 뿌리고 그걸 (ReviewSection으로 가세요.)
  return (
    <>
      <WrapStyle>
        <div className="review-information">
          <img src="" alt="유저 사진" />
          <div>
            <p>(유저이름)</p>
            <span>(날짜)</span>
          </div>
        </div>
        <p className="review-content">(리뷰 내용)</p>
      </WrapStyle>
    </>
  );
};
export default EachReview;

const WrapStyle = styled.div`
  width: 100%;
  border: 1px solid red;

  .review-information {
    display: flex;
    align-items: center;
    margin-bottom: 2rem;

    img {
      border-radius: 50%;
      line-height: 3rem;
      margin-right: 1rem;
      border: 1px solid black;
      width: 60px;
      height: 60px;
    }
    & > div {
      p {
        font-size: 1.6rem;
        font-weight: 500;
        color: ${color.dark_gray2};
        line-height: 3rem;
      }
      span {
        font-size: 1.4rem;
        color: ${color.medium_gray2};
      }
    }
  }

  .review-content {
    font-size: 1.6rem;
    color: ${color.dark_gray};
  }
`;
