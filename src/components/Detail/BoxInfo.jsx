import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { authButton, authInput, color } from "../common/styled";
import CalenderPop from "./CalenderPop";
import PeoplePop from "./PeoplePop";

const BoxInfo = () => {
  const navigate = useNavigate();

  const searchInfo = useSelector((state) => state.searchHouseReducer);
  const [checkin, setCheckin] = useState("");
  const [checkout, setCheckout] = useState("");
  const [people, setPeople] = useState("");
  const dateInfo = useSelector((state) => state.searchHouseReducer);

  //클릭시 나오는 팝업을 위한 state
  const [isCalender, setIsCalender] = useState(false);
  const [isPeople, setIsPeople] = useState(false);

  useEffect(() => {
    if (searchInfo.checkin)
      setCheckin(
        `${searchInfo.checkin.slice(5, 7)}월 ${searchInfo.checkin.slice(
          8,
          10
        )}일`
      );
    if (searchInfo.checkout)
      setCheckout(
        `${searchInfo.checkout.slice(5, 7)}월 ${searchInfo.checkout.slice(
          8,
          10
        )}일`
      );
    if (searchInfo.people) setPeople(`게스트 ${searchInfo.people}명`);
  }, [searchInfo]);

  //팝업 함수
  const handleClickCalender = () => {
    setIsCalender(!isCalender);
  };

  const handleClickPeople = () => {
    setIsPeople(!isPeople);
  };

  return (
    <WrapperStyle>
      {isCalender && <CalenderPop handleClickCalender={handleClickCalender} />}
      {isPeople && <PeoplePop handleClickPeople={handleClickPeople} />}
      <div className="title-text">
        <p>요금을 확인하려면 날짜를 입력하세요.</p>
      </div>
      <div className="chart">
        <div className="check-inout" onClick={handleClickCalender}>
          <button>
            <p>체크인</p>
            <input placeholder="날짜추가" defaultValue={checkin} />
          </button>
          <button>
            <p>체크아웃</p>
            <input placeholder="날짜추가" defaultValue={checkout} />
          </button>
        </div>
        <div>
          <button className="guest" onClick={handleClickPeople}>
            <p>인원</p>
            <input placeholder="게스트 1명" defaultValue={people} />
          </button>
        </div>
      </div>
      {dateInfo.stayDay ? (
        <button className="reservation" onClick={() => navigate("/payment")}>
          예약하기
        </button>
      ) : (
        <button className="reservation">예약 가능 여부 보기</button>
      )}
    </WrapperStyle>
  );
};

export default BoxInfo;

const WrapperStyle = styled.div`
  width: 100%;
  box-sizing: border-box;

  .title-text {
    p:nth-child(1) {
      font-size: 2.2rem;
      word-break: keep-all;
      margin-bottom: 2rem;
      line-height: 2.5rem;
    }
  }

  .chart {
    border: 1px solid ${color.medium_gray2};
    border-radius: 1rem;
    box-sizing: border-box;
    overflow: hidden;
    width: 100%;
    .check-inout {
      cursor: pointer;
      width: 100%;
      border-bottom: 1px solid black;
      border: none;
      border-radius: 1rem;
      margin-bottom: 1.6px;
      background: white;
      padding: 0;
      display: grid;
      grid-template-columns: 1fr 1fr;

      button {
        text-align: start;
        padding: 1rem;
        border: none;
        background: white;
        margin-right: 1.7px;
        &:nth-child(2) {
          border-left: 1px solid ${color.medium_gray2};
        }
        &:focus {
          box-sizing: border-box;
          border-radius: 1rem;
          outline: 2px solid ${color.black};
        }
        & > p:nth-child(1) {
          font-size: 1rem;
          font-weight: 800;
          padding-bottom: 0.5rem;
        }
        & > input {
          font-size: 1.4rem;
          border: none;
          color: ${color.dark_gray2};
          font-weight: 500;
        }
      }

      &:focus {
        box-sizing: border-box;
        border-radius: 1rem;
        outline: 2px solid ${color.black};
      }
    }

    .guest {
      width: 100%;
      background: white;
      text-align: start;
      padding: 1rem;
      border: none;
      border-top: 1px solid ${color.medium_gray2};
      &:focus {
        box-sizing: border-box;
        border-radius: 1rem;
        border: 2px solid ${color.black};
      }
      & > p:nth-child(1) {
        font-size: 1rem;
        font-weight: 800;
        padding-bottom: 0.5rem;
      }
      & > input {
        font-size: 1.4rem;
        border: none;
        color: ${color.dark_gray2};
        font-weight: 500;
      }
    }
  }

  .reservation {
    ${authButton};
    margin-top: 2rem;
    margin-bottom: 0;
    &:active {
      background: ${color.Main};
      transform: scale(0.95);
      transition: transform 0.1s ease;
    }
  }
`;
