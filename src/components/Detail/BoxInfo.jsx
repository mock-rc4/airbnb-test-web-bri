import React from "react";
import styled from "styled-components";
import { authButton, authInput, color } from "../common/styled";

const BoxInfo = () => {
  return (
    <WrapperStyle>
      <div className="title-text">
        <p>요금을 확인하려면 날짜를 입력하세요.</p>
        <p>별점이랑 그런거</p>
      </div>
      <div className="chart">
        <div className="check-inout">
          <button>
            <p>체크인</p>
            <p>날짜 추가</p>
          </button>
          <button>
            <p>체크아웃</p>
            <p>날짜 추가</p>
          </button>
        </div>
        <div>
          <button className="guest">
            <p>인원</p>
            <p>게스트 ? 명</p>
          </button>
        </div>
      </div>
      <button className="reservation">예약 가능 여부 보기</button>
      {/* 이 버튼도 결국 두개 만들어야함 */}
    </WrapperStyle>
  );
};

export default BoxInfo;

const WrapperStyle = styled.div`
  width: 100%;
  box-sizing: border-box;

  .title-text {
    p:nth-child(1) {
      font-size: 2.2rem;
      word-break: keep-all;
      margin-bottom: 0.5rem;
      line-height: 2.5rem;
    }
    p:nth-child(2) {
      margin-bottom: 1.5rem;
    }
  }

  .chart {
    border: 1px solid ${color.medium_gray2};
    border-radius: 1rem;
    box-sizing: border-box;
    overflow: hidden;
    width: 100%;
    .check-inout {
      width: 100%;
      border-bottom: 1px solid black;
      border: none;
      border-radius: 1rem;
      margin-bottom: 1.6px;
      background: white;
      padding: 0;
      display: grid;
      grid-template-columns: 1fr 1fr;

      button {
        text-align: start;
        padding: 1rem;
        border: none;
        background: white;
        margin-right: 1.7px;
        &:nth-child(2) {
          border-left: 1px solid ${color.medium_gray2};
        }
        &:focus {
          box-sizing: border-box;
          border-radius: 1rem;
          outline: 2px solid ${color.black};
        }
        & > p:nth-child(1) {
          font-size: 1rem;
          font-weight: 800;
          padding-bottom: 0.5rem;
        }
        & > p:nth-child(2) {
          font-size: 1.4rem;
          color: ${color.medium_gray2};
        }
      }

      &:focus {
        box-sizing: border-box;
        border-radius: 1rem;
        outline: 2px solid ${color.black};
      }
    }

    .guest {
      width: 100%;
      background: white;
      text-align: start;
      padding: 1rem;
      border: none;
      border-top: 1px solid ${color.medium_gray2};
      &:focus {
        box-sizing: border-box;
        border-radius: 1rem;
        border: 2px solid ${color.black};
      }
      & > p:nth-child(1) {
        font-size: 1rem;
        font-weight: 800;
        padding-bottom: 0.5rem;
      }
      & > p:nth-child(2) {
        font-size: 1.4rem;
        color: ${color.medium_gray2};
      }
    }
  }

  .reservation {
    ${authButton};
    margin-bottom: 0;
    &:active {
      background: ${color.Main};
      transform: scale(0.95);
      transition: transform 0.1s ease;
    }
  }
`;
