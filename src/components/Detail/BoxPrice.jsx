import React from "react";
import styled from "styled-components";
import { color, flexCenter } from "../common/styled";

const BoxPrice = () => {
  return (
    <WrapperStyle>
      <p>예약 확정 전에는 요금이 청구되지 않습니다.</p>
      <div className="price-section">
        <div className="price">
          <span>₩(가격) ✕ (숙박일수)박</span>
          <p>₩(가격 계산값)</p>
        </div>
        <div className="price">
          <span>청소비</span>
          <p>₩(가격)</p>
        </div>
        <div className="price">
          <span>서비스 수수료</span>
          <p>₩(가격)</p>
        </div>
        <div className="price">
          <span>숙박세와 수수료</span>
          <p>₩(가격)</p>
        </div>

        <div className="total-price">
          <span>총 합계</span>
          <p>₩(가격 다 더한 값)</p>
        </div>
      </div>
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
      font-weight: 500;
    }
  }
`;
