import React from "react";
import styled from "styled-components";
import Calender from "../../components/common/Calender";
import { color, flexCenter } from "../common/styled";

const CalenderPop = ({ handleClickCalender }) => {
  return (
    <WrapperStyle>
      <Calender />
      <button onClick={handleClickCalender}>닫기</button>
    </WrapperStyle>
  );
};
export default CalenderPop;

const WrapperStyle = styled.div`
  ${flexCenter}
  align-items: end;
  flex-direction: column;
  padding: 3rem 5rem;
  position: absolute;
  background: white;
  border: 1px solid ${color.medium_gray};
  border-radius: 2rem;
  top: 12rem;
  right: -1rem;
  z-index: 10;
  box-shadow: 0rem 0rem 1rem 0.5rem ${color.light_gray2};
  button {
    background: black;
    color: white;
    border: none;
    border-radius: 1rem;
    padding: 1rem 2rem;
    cursor: pointer;
  }
`;
