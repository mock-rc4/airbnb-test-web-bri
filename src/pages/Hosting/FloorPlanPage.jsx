import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { flexCenter } from "../../components/common/styled";
import DetailHeader from "../../components/Hosting/DetailHeader";
import DetailNav from "../../components/Hosting/DetailNav";
import LeftSection from "../../components/Hosting/LeftSection";
import {
  addGuest,
  addBed,
  addRoom,
  addBath,
} from "../../store/actions/addHosting";
import { ReactComponent as Minus } from "../../svg/ic-minus.svg";
import { ReactComponent as Plus } from "../../svg/ic-plus.svg";
import { useSelector } from "react-redux";

const FloorPlanPage = () => {
  //디스패치
  const dispatch = useDispatch();
  //갯수 state
  const [guest, setGuest] = useState(4);
  const [bed, setBed] = useState(1);
  const [room, setRoom] = useState(1);
  const [bath, setBath] = useState(1);

  //function
  const handleClickPlus = (e) => {
    const {
      currentTarget: { name, value },
    } = e;

    if (name === "guest") setGuest(guest + 1);
    else if (name === "bed") setBed(bed + 1);
    else if (name === "room") setRoom(room + 1);
    else if (name === "bath") setBath(bath + 1);
  };

  const handleClickMinus = (e) => {
    const {
      currentTarget: { name, value },
    } = e;

    if (name === "guest") setGuest(guest - 1);
    else if (name === "bed") setBed(bed - 1);
    else if (name === "room") setRoom(room - 1);
    else if (name === "bath") setBath(bath - 1);
  };

  useEffect(() => {
    dispatch(addGuest(guest));
    dispatch(addBed(bed));
    dispatch(addRoom(room));
    dispatch(addBath(bath));
  }, [guest, bed, room, bath]);

  return (
    <WrapperStyle>
      <LeftSection title="숙소에서 맞이할 최대 인원수를 알려주세요." />
      <div className="right-section">
        <DetailHeader isdark="false" />
        <div className="selection">
          <div>
            <span>게스트</span>
            <CounterStyle>
              <button name="guest" onClick={handleClickMinus}>
                <Minus />
              </button>
              <p>{guest}</p>
              <button name="guest" onClick={handleClickPlus}>
                <Plus />
              </button>
            </CounterStyle>
          </div>
          <div>
            <span>침대</span>
            <CounterStyle>
              <button name="bed" onClick={handleClickMinus}>
                <Minus />
              </button>
              <p>{bed}</p>
              <button name="bed" onClick={handleClickPlus}>
                <Plus />
              </button>
            </CounterStyle>
          </div>
          <div>
            <span>침실</span>
            <CounterStyle>
              <button name="room" onClick={handleClickMinus}>
                <Minus />
              </button>
              <p>{room}</p>
              <button name="room" onClick={handleClickPlus}>
                <Plus />
              </button>
            </CounterStyle>
          </div>
          <div>
            <span>욕실</span>
            <CounterStyle>
              <button name="bath" onClick={handleClickMinus}>
                <Minus />
              </button>
              <p>{bath}</p>
              <button name="bath" onClick={handleClickPlus}>
                <Plus />
              </button>
            </CounterStyle>
          </div>
        </div>
        <DetailNav
          nextBtnAble="true"
          backPrev="/hosting/address"
          goNext="/hosting/roomimage"
        />
      </div>
    </WrapperStyle>
  );
};

export default FloorPlanPage;

const WrapperStyle = styled.main`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr;

  & > div {
    width: 100%;
    position: relative;
  }

  .selection {
    width: 80%;
    ${flexCenter}
    flex-direction: column;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    & > div {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 1.5rem;

      span {
        font-size: 2.6rem;
        font-weight: 500;
      }
    }
  }
`;
// 카운터 버튼 style
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
