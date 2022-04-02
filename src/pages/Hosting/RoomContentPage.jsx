import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { color, flexCenter } from "../../components/common/styled";
import DetailHeader from "../../components/Hosting/DetailHeader";
import DetailNav from "../../components/Hosting/DetailNav";
import { addContent } from "../../store/actions/addHosting";
import { ReactComponent as Logo } from "../../svg/ic-logo-only.svg";
import { useSelector, useDispatch } from "react-redux";

const RoomContentPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [text, setText] = useState(
    "편안함을 자랑하는 이곳에서 즐거운 시간을 보내실 수 있을 것입니다."
  );
  const [length, setLength] = useState(text.length);

  useEffect(() => {
    dispatch(addContent(text));
  }, [text]);

  const handleInputValue = (e) => {
    setLength(e.target.value.length);
    setText(e.target.value);
  };

  return (
    <WrapperStyle>
      <div className="left-section">
        <div className="back"></div>
        <div className="logo">
          <LogoStyle onClick={() => navigate("/")} />
        </div>
        <video
          src="https://a0.muscache.com/v/55/86/558653ec-da4e-5148-b0e2-828b7a691e86/558653ecda4e5148b0e2828b7a691e86_4000k_1.mp4"
          autoPlay
          muted
        ></video>
        <div className="text">
          <button>▶︎ 동영상 전체 시청하기</button>
          <h1>숙소에 대해 설명해 주세요.</h1>
        </div>
      </div>
      <div className="right-section">
        <DetailHeader isdark="false" />
        <main>
          <h2>숙소 설명 작성하기</h2>
          <textarea
            rows="4"
            autoComplete="off"
            value={text}
            onChange={handleInputValue}
          ></textarea>
          <p>{length}/500</p>
        </main>
        <DetailNav
          nextBtnAble={length}
          backPrev="/hosting/roomname"
          goNext="/hosting/roomprice"
        />
      </div>
    </WrapperStyle>
  );
};

export default RoomContentPage;

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

  //오른쪽
  .right-section {
    ${flexCenter}

    main {
      width: 65%;
      color: ${color.dark_gray2};
      h2 {
        font-size: 2.2rem;
        padding: 2.5rem 0;
        font-weight: 500;
      }
      textarea {
        width: 100%;
        font-size: 1.8rem;
        color: ${color.dark_gray};
        padding: 2rem;
        box-sizing: border-box;
        border: 1px solid ${color.medium_gray2};
        border-radius: 1rem;
        line-height: 2.5rem;
        &:focus {
          outline: none;
        }
        &::placeholder {
          color: ${color.medium_gray2};
        }
      }
      p {
        font-size: 1.4rem;
        padding: 2rem 0;
      }
    }
  }
`;

const LogoStyle = styled(Logo)`
  cursor: pointer;
`;
