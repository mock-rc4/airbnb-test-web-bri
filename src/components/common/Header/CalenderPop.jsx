import React from "react";
import styled from "styled-components";
import Calender from "../Calender";
import { color, flexCenter } from "../styled";

const CalenderPop = () => {
  return (
    <WrapperStyle>
      <p>
        <button>달력</button>
        <button>유연한일정</button>
      </p>
      <Calender />
    </WrapperStyle>
  );
};

export default CalenderPop;

const WrapperStyle = styled.div`
  ${flexCenter};
  flex-direction: column;
  width: 100%;
  height: fit-content;
  border-radius: 3rem;
  background: white;
  position: absolute;
  top: 7rem;
  z-index: 50;
  padding: 2rem;
  border: 1px solid ${color.medium_gray};
  p {
    padding: 0.4rem 0.5rem;
    background: ${color.light_gray2};
    border-radius: 3rem;
    margin-bottom: 2rem;
    button {
      border: none;
      padding: 0.5rem 1rem;
      border-radius: 3rem;
      &:nth-child(1) {
        background: white;
      }
      &:hover {
        background: white;
      }
    }
  }
`;
