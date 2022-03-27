import React from "react";
import styled from "styled-components";
import { color } from "../common/styled";

const DetailHeader = ({ isdark }) => {
  return (
    <WrapperStyle dark={isdark}>
      <button>슈퍼호스트에게 물어보기</button>
      <button>도움말</button>
      <button>저장 및 나가기</button>
    </WrapperStyle>
  );
};

export default DetailHeader;

const WrapperStyle = styled.header`
  padding: 3rem 5rem;
  text-align: end;
  box-sizing: border-box;
  z-index: 50;
  position: absolute;
  top: 0;
  right: 0;

  button {
    background: ${(props) =>
      props.dark == "true" ? "black" : `${color.light_gray}`};
    border: none;
    padding: 1rem 1.5rem;
    font-size: 1.2rem;
    font-weight: 500;
    border-radius: 2rem;
    margin-left: 1.5rem;
    cursor: pointer;
    color: ${(props) => (props.dark == "true" ? "white" : "black")};

    &:nth-child(1) {
      background: ${(props) => (props.dark == "true" ? "black" : `white`)};
      border: 1px solid ${color.light_gray2};
      box-shadow: 2px 3px 3px 1px ${color.medium_gray};
    }
  }
`;
