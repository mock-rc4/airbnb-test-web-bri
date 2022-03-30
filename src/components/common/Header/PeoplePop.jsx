import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { color, flexCenter } from "../styled";
import { ReactComponent as Minus } from "../../../svg/ic-minus.svg";
import { ReactComponent as Plus } from "../../../svg/ic-plus.svg";
import { useDispatch, useSelector } from "react-redux";
import {
  addAdult,
  addBaby,
  addKid,
  addPeople,
  addPet,
} from "../../../store/actions/searchHouse";

const PeoplePop = () => {
  //리덕스 값 잇으면 보여주기
  const [history, setHistory] = useState(false);

  const dispatch = useDispatch();
  const userNumInfo = useSelector((state) => state.searchHouseReducer);

  const [adult, setAdult] = useState(userNumInfo.adult);
  const [kid, setKid] = useState(userNumInfo.kid);
  const [baby, setBaby] = useState(userNumInfo.baby);
  const [pet, setPet] = useState(userNumInfo.pet);

  //생명주기
  useEffect(() => {
    dispatch(addPeople(adult + kid + baby));
    dispatch(addAdult(adult));
    dispatch(addKid(kid));
    dispatch(addBaby(baby));
    dispatch(addPet(pet));
  }, [adult, kid, baby, pet]);

  //함수
  const handleClickPlus = (e) => {
    const {
      currentTarget: { name, value },
    } = e;
    if (name === "adult") setAdult(adult + 1);
    else if (name === "kid") setKid(kid + 1);
    else if (name === "baby") setBaby(baby + 1);
    else if (name === "pet") setPet(pet + 1);
  };

  const handleClickMinus = (e) => {
    const {
      currentTarget: { name, value },
    } = e;
    if (name === "adult") setAdult(adult - 1);
    else if (name === "kid") setKid(kid - 1);
    else if (name === "baby") setBaby(baby - 1);
    else if (name === "pet") setPet(pet - 1);
  };

  return (
    <WrapperStyle>
      <div className="section">
        <div className="text">
          <p>성인</p>
          <span>만 13세 이상</span>
        </div>
        <CounterStyle>
          <button name="adult" onClick={handleClickMinus}>
            <Minus />
          </button>
          <p>{adult}</p>
          <button name="adult" onClick={handleClickPlus}>
            <Plus />
          </button>
        </CounterStyle>
      </div>
      <div className="section">
        <div className="text">
          <p>어린이</p>
          <span>만 2~12세</span>
        </div>
        <CounterStyle>
          <button name="kid" onClick={handleClickMinus}>
            <Minus />
          </button>
          <p>{kid}</p>
          <button name="kid" onClick={handleClickPlus}>
            <Plus />
          </button>
        </CounterStyle>
      </div>
      <div className="section">
        <div className="text">
          <p>유아</p>
          <span>만 2세 미만</span>
        </div>
        <CounterStyle>
          <button name="baby" onClick={handleClickMinus}>
            <Minus />
          </button>
          <p>{baby}</p>
          <button name="baby" onClick={handleClickPlus}>
            <Plus />
          </button>
        </CounterStyle>
      </div>
      <div className="section">
        <div className="text">
          <p>반려동물</p>
          <span className="bold-line">보조동물을 동반하시나요?</span>
        </div>
        <CounterStyle>
          <button name="pet" onClick={handleClickMinus}>
            <Minus />
          </button>
          <p>{pet}</p>
          <button name="pet" onClick={handleClickPlus}>
            <Plus />
          </button>
        </CounterStyle>
      </div>
      <div className="section-noline">
        <span>
          반려동물을 3마리 이상 동반하는 경우, 반드시 호스트에게 알려주세요.
        </span>
      </div>
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

  .section {
    padding: 1.6rem 0;
    border-bottom: 1px solid ${color.medium_gray};
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .section-noline {
    padding: 1.6rem 0;
  }

  p {
    font-size: 1.6rem;
    font-weight: 600;
    margin-bottom: 0.3rem;
    color: ${color.dark_gray2};
  }
  span {
    font-size: 1.4rem;
    color: ${color.medium_gray2};
  }
  .bold-line {
    font-weight: 600;
    color: ${color.dark_gray2};
    text-decoration: underline;
  }

  .counter {
    ${flexCenter}
  }
`;

const CounterStyle = styled.div`
  display: flex;
  align-items: center;

  p {
    font-size: 1.6rem;
    width: 4rem;
    text-align: center;
  }
  button {
    border: 1px solid #aaaaaa;
    background: transparent;
    padding: 1rem;
    border-radius: 50%;
    cursor: pointer;
    z-index: 1;
  }
`;
