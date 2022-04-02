import React from "react";
import styled from "styled-components";
import { color, flexCenter } from "../common/styled";
import PeopleCount from "../common/Header/PeopleCount";

const PeoplePop = ({ handleClickPeople }) => {
  return (
    <WrapperStyle>
      <PeopleCount />
      <button onClick={handleClickPeople}>닫기</button>
    </WrapperStyle>
  );
};
export default PeoplePop;

const WrapperStyle = styled.div`
  ${flexCenter}
  width: 34.5rem;
  flex-direction: column;
  position: absolute;
  background: white;
  border: 1px solid ${color.medium_gray};
  border-radius: 0.5rem;
  top: 18.5rem;
  padding: 1rem 2rem;

  z-index: 10;
  box-shadow: 0rem 0rem 1rem 0.2rem ${color.light_gray2};
  button {
    width: 100%;
    text-align: end;
    background: white;
    border: none;
    font-size: 1.6rem;
    font-weight: 600;
    text-decoration: underline;
    cursor: pointer;
  }
`;
