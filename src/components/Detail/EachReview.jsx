import React from "react";
import styled from "styled-components";
import { color, flexCenter } from "../common/styled";

const EachReview = ({
  firstName,
  reservationIdx,
  reviewContent,
  startDate,
  userImage,
}) => {
  //함수

  const onErrorImg = (e) => {
    e.target.src =
      "https://a0.muscache.com/im/pictures/user/bd59d9d7-1baf-412e-845e-6ef59504e881.jpg?im_w=240";
  };

  return (
    <>
      <WrapStyle>
        <div className="review-information">
          <img src="" alt="유저 사진" onError={onErrorImg} />
          <div>
            <p>{firstName}</p>
            <span>{startDate}</span>
          </div>
        </div>
        <p className="review-content">{reviewContent}</p>
      </WrapStyle>
    </>
  );
};
export default EachReview;

const WrapStyle = styled.div`
  width: 100%;

  .review-information {
    display: flex;
    align-items: center;
    margin-bottom: 2rem;

    img {
      border-radius: 50%;
      line-height: 3rem;
      margin-right: 1rem;
      width: 60px;
      height: 60px;
    }
    & > div {
      p {
        font-size: 1.6rem;
        font-weight: 600;
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
