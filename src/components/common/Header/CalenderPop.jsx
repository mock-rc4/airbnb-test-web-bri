import React from "react";
import styled from "styled-components";
import Calender from "../Calender";
import { color } from "../styled";

const CalenderPop = () => {
  return (
    <WrapperStyle>
      <Calender />
    </WrapperStyle>
  );
};

export default CalenderPop;

const WrapperStyle = styled.div`
  width: 100%;
  height: fit-content;
  border: 1px solid ${color.medium_gray};
  border-radius: 3rem;
  background: white;
  position: absolute;
  top: 7rem;
  z-index: 50;
  padding: 3rem;
`;
