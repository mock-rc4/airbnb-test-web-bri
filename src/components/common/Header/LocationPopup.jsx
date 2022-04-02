import React, { useState } from "react";
import styled from "styled-components";
import { color } from "../styled";
import { ReactComponent as Arrow } from "../../../svg/ic-rightarrow.svg";

const LocationPopup = () => {
  //리덕스 값 잇으면 보여주기
  const [history, setHistory] = useState(false);
  return (
    <WrapperStyle>
      <p>언제 어디로든 떠나는 여행</p>
      <button>
        유연한 검색
        <ArrowStyle />
      </button>
      {history && <p>최근 검색 기록</p>}
    </WrapperStyle>
  );
};

export default LocationPopup;

const WrapperStyle = styled.div`
  width: 40rem;
  height: fit-content;
  border: 1px solid ${color.medium_gray};
  border-radius: 3rem;
  background: white;
  position: absolute;
  top: 7rem;
  left: 0;
  padding: 3rem;

  p {
    font-size: 1.4rem;
  }
  button {
    width: 100%;
    background: white;
    border: 1px solid ${color.medium_gray};
    border-radius: 3rem;
    margin: 2rem 0;
    padding: 1.5rem 2rem;
    text-align: start;
    font-size: 1.8rem;
    font-weight: 700;
    color: #7f00a6;
    box-shadow: 1px 4px 5px 5px ${color.light_gray};
    position: relative;
  }
`;

const ArrowStyle = styled(Arrow)`
  transform: scale(1.8);
  fill: #7f00a6;
  position: absolute;
  top: 37%;
  right: 2rem;
`;
