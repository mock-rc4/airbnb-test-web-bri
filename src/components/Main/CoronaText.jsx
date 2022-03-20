import React from "react";
import styled from "styled-components";
import { color } from "../common/styled";

const CoronaText = () => {
  return (
    <BoxStyle>
      <p>에어비앤비의 코로나19 대응 방안에 대한 최신 정보를 확인하세요.</p>
    </BoxStyle>
  );
};
export default CoronaText;

const BoxStyle = styled.div`
  width: 100%;

  p {
    font-size: 1.4rem;
    text-align: center;
    font-weight: 500;
    text-decoration: underline;
    color: white;
    background: ${color.black};
    padding-top: 2rem;
    cursor: pointer;

    &:hover {
      color: ${color.medium_gray};
    }
  }
`;
