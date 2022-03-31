import React from "react";
import styled from "styled-components";
import PeopleCount from "./PeopleCount";
import { color } from "../styled";

const PeoplePop = () => {
  return (
    <WrapperStyle>
      <PeopleCount />
    </WrapperStyle>
  );
};

export default PeoplePop;

const WrapperStyle = styled.div`
  width: 40rem;
  height: fit-content;
  border: 1px solid ${color.medium_gray};
  border-radius: 3rem;
  background: white;
  position: absolute;
  top: 7rem;
  right: 0;
  z-index: 50;
  padding: 1rem 3rem;
`;
