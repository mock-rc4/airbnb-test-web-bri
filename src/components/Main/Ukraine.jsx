import React from "react";
import styled from "styled-components";
import { color, flexCenter } from "../common/styled";

const Ukraine = () => {
  return (
    <>
      <BoxStyle>
        <div className="ukraine-box">
          <p>10만 명에 달하는 우크라이나 피란민에게 임시 숙소를 제공해주세요</p>
          <button>자세히 알아보기</button>
        </div>
      </BoxStyle>
    </>
  );
};

export default Ukraine;

const BoxStyle = styled.section`
  width: 100%;
  background: ${color.black};
  ${flexCenter};
  padding-bottom: 9.6rem;

  .ukraine-box {
    position: relative;
    padding: 9% 0;
    width: 90%;
    border-radius: 1rem;
    ${flexCenter}
    flex-direction: column;
    background: ${color.Main};

    p {
      padding: 0 10rem;
      color: white;
      font-size: 3.8rem;
      font-weight: 450;
      margin-bottom: 2rem;
      word-break: keep-all;
    }
    button {
      padding: 1rem 1.5rem;
      box-sizing: border-box;
      border: 1px solid white;
      border-radius: 0.6rem;
      background: ${color.Main};
      color: white;
      cursor: pointer;
    }
  }
`;
