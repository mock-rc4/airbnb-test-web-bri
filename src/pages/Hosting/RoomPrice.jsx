import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { color, flexCenter } from "../../components/common/styled";
import DetailHeader from "../../components/Hosting/DetailHeader";
import DetailNav from "../../components/Hosting/DetailNav";
import { ReactComponent as Logo } from "../../svg/ic-logo-only.svg";
import { ReactComponent as Question } from "../../svg/ic-question.svg";
import { ReactComponent as Minus } from "../../svg/ic-minus.svg";
import { ReactComponent as Plus } from "../../svg/ic-plus.svg";
import { useDispatch } from "react-redux";
import { addPrice } from "../../store/actions/addHosting";

const RoomPricePage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const data = useSelector((state) => state.addHostingReducer);
  // console.log(data);

  //state
  const [price, setPrice] = useState(20000);

  const handleClickBtn = (e) => {
    const {
      currentTarget: { name, value },
    } = e;

    if (name === "minus") setPrice(price - 10000);
    else if (name === "plus") setPrice(price + 10000);
  };
  const handleInputValue = (e) => {
    setPrice(e.target.value);
  };

  useEffect(() => {
    dispatch(addPrice(price));
  }, [price]);

  return (
    <WrapperStyle>
      <div className="left-section">
        <div className="back"></div>
        <div className="logo">
          <LogoStyle onClick={() => navigate("/")} />
        </div>
        <video
          src="https://a0.muscache.com/v/9c/d4/9cd47434-c6bd-58ec-90b7-b50aa7dba461/9cd47434c6bd58ec90b7b50aa7dba461_4000k_1.mp4"
          autoPlay
          muted
        ></video>
        <div className="text">
          <button>▶︎ 동영상 전체 시청하기</button>
          <h1>이제 요금을 설정하실 차례입니다.</h1>
        </div>
      </div>
      <div className="right-section">
        <DetailHeader isdark="false" />
        <main>
          <div className="price-section">
            <button name="minus" onClick={handleClickBtn}>
              <Minus />
            </button>
            <InputStyle
              type="number"
              placeholder="₩00"
              required={true}
              value={price}
              onChange={handleInputValue}
            />
            <button name="plus" onClick={handleClickBtn}>
              <Plus />
            </button>
          </div>
          <div className="price-error">/박</div>
          <div className="recommend-section">
            <p>
              이와 비슷한 숙소의 요금은 보통<br></br> ₩20,871~₩34,785
              사이입니다.
            </p>
            <QuestionStyle />
          </div>
          <div className="text-section">
            <label htmlFor="high">
              첫 3명의 게스트에게 20% 할인 혜택을 제공하여 예약률을 높여보세요.
            </label>
            <input type="checkbox" id="high" />
          </div>
        </main>
        <DetailNav
          nextBtnAble={price}
          backPrev="/hosting/roomcontent"
          goNext="/hosting/confirm"
        />
      </div>
    </WrapperStyle>
  );
};

export default RoomPricePage;

const WrapperStyle = styled.main`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr;

  & > div {
    width: 100%;
    position: relative;
  }
  .back {
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, transparent 40%, black 120%);
  }

  .left-section {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .logo {
    padding: 5rem;
    position: absolute;
    top: 0;
    z-index: 1;
  }
  .text {
    position: absolute;
    padding: 5rem;
    bottom: 5rem;

    & > button {
      background-color: rgba(0, 0, 0, 0.5);
      color: white;
      border: none;
      border-radius: 2rem;
      padding: 1rem 1.5rem;
      font-size: 1.6rem;
    }
    & > h1 {
      font-size: 4.8rem;
      font-weight: 550;
      color: white;
      word-break: keep-all;
      padding: 3rem 0;
      line-height: 5.5rem;
    }
  }

  //오른쪽 섹션
  .right-section {
    ${flexCenter}

    main {
      width: 70%;
    }
    .price-section {
      ${flexCenter};
      justify-content: space-between;
      margin-bottom: 2rem;
      width: 100%;

      button {
        padding: 2rem;
        background: white;
        border-radius: 50%;
        border: 1px solid ${color.medium_gray2};
      }
    }
    .price-error {
      ${flexCenter};
      font-size: 1.4rem;
      color: ${color.dark_gray2};
      margin-bottom: 3rem;
    }
    .recommend-section {
      ${flexCenter};
      width: 100%;
      font-size: 2.2rem;
      text-align: center;
      line-height: 3rem;
      margin-bottom: 7rem;
      color: ${color.dark_gray2};
    }

    .text-section {
      width: 100%;
      font-size: 1.6rem;
      color: ${color.dark_gray};
      padding: 2rem 1.5rem;
      border: 1px solid ${color.medium_gray};
      border-radius: 1rem;
    }
  }
`;

const LogoStyle = styled(Logo)`
  cursor: pointer;
`;

const QuestionStyle = styled(Question)`
  padding: 0.6rem;
  margin-left: 0.3rem;
  border-radius: 50%;
  cursor: pointer;
  &:hover {
    background: ${color.light_gray};
  }
`;

const InputStyle = styled.input`
  width: 60%;
  border: 1px solid ${color.medium_gray2};
  border-radius: 1rem;
  padding: 2rem 1rem;
  outline: none;
  margin: 0 12px;
  font-size: 48px !important;
  font-weight: 500 !important;
  text-align: center;
  &:focus {
    outline: 2px solid ${(props) => props.maincolor};
  }

  &::placeholder {
    text-align: center;
  }
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
