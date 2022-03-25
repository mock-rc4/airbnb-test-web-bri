import React from "react";
import styled from "styled-components";
import { detailButton, flexCenter, color } from "../common/styled";
import EachReview from "./EachReview";

const ReviewSection = ({ contentRef }) => {
  //후기 관련 api 도 불러와야 함.
  //1. 별점, 후기 갯수 api 새로 만들어서 여기서 그냥 컴포넌트를 불러오자
  return (
    <WrapperStyle ref={(el) => (contentRef.current[2] = el)}>
      <BoxStyle>
        <h3>별점 • 후기 ()개</h3>
        <section className="rating">
          <div>
            <span>d</span>
          </div>
          <div>
            <span>d</span>
          </div>
          <div>
            <span>d</span>
          </div>
        </section>
        <section className="reviews">
          {/* 여기서 그냥 보여주는 방식으로 하자 */}
          <EachReview />
          <EachReview />
          <EachReview />
        </section>
        <button>후기 ( )개 모두 보기</button>
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
  }

  .rating {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;
    font-size: 1.6rem;
    padding: 2rem 0;
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
