import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { color } from "../common/styled";

const DetailNav = ({ backPrev, nextBtnAble, goNext }) => {
  //disable 인지 아닌지도 props 로 불러와야함
  const navigate = useNavigate();
  const [disable, setDisable] = useState(true);

  //생명주기
  useEffect(() => {
    if (nextBtnAble.length !== 0) {
      setDisable(false);
    }
  }, [nextBtnAble]);

  //함수

  const handleNavigate = (e) => {
    if (e.target.name === "prevButton") {
      navigate(backPrev);
    } else if (e.target.name === "nextButton") {
      navigate(goNext);
    }
  };

  return (
    <WrapperStyle>
      <button name="prevButton" className="prev" onClick={handleNavigate}>
        뒤로
      </button>

      <NextBtnStyle
        name="nextButton"
        nextBtnAble={nextBtnAble}
        onClick={handleNavigate}
        disabled={disable}
      >
        다음
      </NextBtnStyle>
    </WrapperStyle>
  );
};

export default DetailNav;

const WrapperStyle = styled.nav`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  border-top: 1.5px solid ${color.medium_gray};
  position: absolute;
  bottom: 0;
  padding: 1.5rem 5rem;
  background: white;
  z-index: 50;

  .prev {
    border: none;
    background: white;
    font-size: 1.6rem;
    text-decoration: underline;
    font-weight: 500;
    cursor: pointer;
  }
`;

const NextBtnStyle = styled.button`
  border: none;
  border-radius: 1rem;
  border-radius: ${color.dark_gray};
  background: ${(props) => (props.nextBtnAble ? "black" : "#aaaaaa")};
  font-size: 1.6rem;
  padding: 1.4rem 2.3rem;
  color: white;
  font-weight: 500;
  cursor: pointer;
`;
