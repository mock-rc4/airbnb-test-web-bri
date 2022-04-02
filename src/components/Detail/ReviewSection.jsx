import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { detailButton, flexCenter, color } from "../common/styled";
import EachReview from "./EachReview";
import axios from "axios";
import { useSelector } from "react-redux";
import { ReactComponent as Star } from "../../svg/ic-star.svg";

const ReviewSection = ({ contentRef }) => {
  const [reviewCount, setReviewCount] = useState("");
  const [starAvg, setStarAvg] = useState("");
  const houseIdxInfo = useSelector((state) => state.storeHouseIdxReducer);
  //후기
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    starInformationApi();
    reviewInformationApi();
  }, []);
  //-----------api------------
  //1.별점 api
  const starInformationApi = async () => {
    try {
      const res = await axios({
        baseURL: "http://joon-serverlab.shop/",
        method: "get",
        url: `app/reserve/review/count?houseIdx=${houseIdxInfo.houseIdx}`,
      });
      setReviewCount(res.data.result.reviewCount);
      setStarAvg(res.data.result.starAvg);
    } catch (e) {
      console.log(e);
    }
  };

  //2. 후기 불러오는 api
  const reviewInformationApi = async () => {
    try {
      const res = await axios({
        baseURL: "http://joon-serverlab.shop/",
        method: "get",
        url: `app/reserve/review/${houseIdxInfo.houseIdx}`,
      });
      setReviews(res.data.result);
      console.log(reviews);
    } catch (e) {
      console.log(e);
    }
  };
  //--------------------------

  return (
    <WrapperStyle ref={(el) => (contentRef.current[2] = el)}>
      <BoxStyle>
        {reviews.length === 0 ? (
          <h3>작성 리뷰가 없습니다.</h3>
        ) : (
          <h3>
            <StarStyle />
            별점 {starAvg} 점 • 후기 {reviewCount}개
          </h3>
        )}

        <section className="reviews">
          {/* 여기서 그냥 보여주는 방식으로 하자 */}
          {reviews.map((item, index) => (
            <EachReview
              key={index}
              firstName={item.firstName}
              reservationIdx={item.reservationIdx}
              reviewContent={item.reviewContent}
              startDate={item.startDate}
              userImage={item.userImage}
            />
          ))}
        </section>
        <button>후기 {reviewCount}개 모두 보기</button>
      </BoxStyle>
    </WrapperStyle>
  );
};
export default ReviewSection;

const WrapperStyle = styled.section`
  width: 100%;
  ${flexCenter};
`;

const BoxStyle = styled.div`
  min-width: 110rem;
  width: 80%;
  padding-bottom: 4rem;
  border-bottom: 1px solid ${color.medium_gray};
  h3 {
    font-size: 2.2rem;
    font-weight: 500;
    display: flex;
    margin-bottom: 3rem;
  }

  .reviews {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;
  }
  button {
    ${detailButton};
  }
`;

const StarStyle = styled(Star)`
  transform: scale(1.2);
  margin-right: 1rem;
  padding-top: 2px;
  fill: ${color.Main};
`;
