import React, { useState } from "react";
import styled from "styled-components";
import { color, flexCenter } from "../common/styled";
import { ReactComponent as Minus } from "../../svg/ic-minus.svg";
import { ReactComponent as Plus } from "../../svg/ic-plus.svg";

const Counter = ({ num }) => {
  const [guest, setGuest] = useState(num);

  const handleClickPlus = () => {
    setGuest(guest + 1);
  };

  const handleClickMinus = () => {
    setGuest(guest - 1);
  };
  return (
    <CounterStyle>
      <button onClick={handleClickMinus}>
        <Minus />
      </button>
      <p>{guest}</p>
      <button onClick={handleClickPlus}>
        <Plus />
      </button>
    </CounterStyle>
  );
};

export default Counter;
const CounterStyle = styled.div`
  ${flexCenter}

  p {
    font-size: 1.6rem;
    width: 4rem;
    text-align: center;
    padding-top: 4px;
  }
  button {
    border: 1px solid #aaaaaa;
    background: white;
    padding: 1rem;
    border-radius: 50%;
  }
`;
