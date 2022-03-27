import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { color, flexCenter } from "../../components/common/styled";
import DetailHeader from "../../components/Hosting/DetailHeader";
import DetailNav from "../../components/Hosting/DetailNav";
import { addName } from "../../store/actions/addHosting";
import { ReactComponent as Logo } from "../../svg/ic-logo-only.svg";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const RoomNamePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [text, setText] = useState("");
  const [length, setLength] = useState(text.length);

  const handleInputValue = (e) => {
    setLength(e.target.value.length);
    setText(e.target.value);
    dispatch(addName(e.target.value));
  };

  return (
    <WrapperStyle>
      <div className="left-section">
        <div className="back"></div>
        <div className="logo">
          <LogoStyle onClick={() => navigate("/")} />
        </div>
        <video
          src="https://a0.muscache.com/v/33/20/3320c65c-5167-5999-ad8b-89c6c0c27b53/3320c65c51675999ad8b89c6c0c27b53_4000k_1.mp4"
          autoPlay
          muted
        ></video>
        <div className="text">
          <button>▶︎ 동영상 전체 시청하기</button>
          <h1>숙소 이름을 만들어주세요.</h1>
        </div>
      </div>
      <div className="right-section">
        <DetailHeader isdark="false" />
        <main>
          <h2>숙소 이름 정하기</h2>
          <textarea
            rows="3"
            autoComplete="off"
            placeholder="주소 받아와서 넣어줄게"
            onChange={handleInputValue}
            value={text}
          ></textarea>
          <p>{length}/50</p>
        </main>
        <DetailNav
          nextBtnAble={text}
          backPrev="/hosting/roomimage"
          goNext="/hosting/roomcontent"
        />
      </div>
    </WrapperStyle>
  );
};

export default RoomNamePage;

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
    top: 40%;
    width: 100%;
    height: 100%;

    background: linear-gradient(to bottom, transparent 0%, black 100%);
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
        font-size: 3.2rem;
        font-weight: 600;
        padding: 2rem;
        box-sizing: border-box;
        border: 1px solid ${color.medium_gray2};
        border-radius: 1rem;
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
