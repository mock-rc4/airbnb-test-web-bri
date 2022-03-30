import React, { useEffect } from "react";
import styled from "styled-components";
import {
  authInput,
  color,
  detailButton,
  flexCenter,
} from "../components/common/styled";
import { useNavigate } from "react-router";
import { ReactComponent as Logo } from "../svg/ic-logo.svg";
import Footer from "../components/common/Footer/Footer";
import HouseSection from "../components/Payment/HouseSection";
const ReservationPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <WrapperStyle>
        <HeaderStyle>
          <LogoStyle onClick={() => navigate("/")} />
        </HeaderStyle>
        <MainStyle>
          <div>
            <div className="title-section">
              <h1>예약 요청이 확정되었습니다!</h1>
            </div>
            <div className="content-section">
              <p>마지막 단계: 여행 계획 공유하기</p>
              <span>여행 일정표를 다른 사람과 공유해 보세요.</span>
              <div className="input">
                <p>이메일 주소 입력</p>
                <input type="text" />
              </div>
              <div className="submit-button">
                <button onClick={() => navigate("/trip")}>제출하기</button>
                <button onClick={() => navigate("/trip")}>건너뛰기</button>
              </div>
            </div>
          </div>
        </MainStyle>
        <Footer widthper="80%" />
      </WrapperStyle>
    </>
  );
};

export default ReservationPage;

const WrapperStyle = styled.div`
  width: 100%;
`;

const HeaderStyle = styled.header`
  border-bottom: 1px solid ${color.medium_gray};
`;

const MainStyle = styled.main`
  width: 100%;
  ${flexCenter}

  & > div {
    width: 80%;
  }
  .title-section {
    ${flexCenter};
    position: relative;
    justify-content: flex-start;
    h1 {
      font-size: 2.8rem;
      font-weight: 800;
      padding: 5rem 0;
    }
  }
  .content-section {
    p {
      font-size: 2rem;
      font-weight: 500;
      margin-bottom: 2rem;
    }
    span {
      font-size: 1.6rem;
      color: ${color.dark_gray};
    }
    input {
      ${authInput}
    }
    .input {
      position: relative;
      margin: 2rem 0;
      width: 40rem;
      p {
        position: absolute;
        font-size: 1.2rem;
        top: 1rem;
        left: 1rem;
        color: ${color.medium_gray2};
      }
    }
  }
  .submit-button {
    display: flex;
    margin-bottom: 6rem;
    button:nth-child(1) {
      ${detailButton}
      background:black;
      color: white;
      margin: 0;
      margin-right: 1rem;
      &:active,
      &:hover {
        background: black;
        color: white;
        background: ${color.dark_gray2};
      }
    }
    button:nth-child(2) {
      ${detailButton}
      margin: 0;
    }
  }
`;

const LogoStyle = styled(Logo)`
  fill: ${color.Main};
  padding: 2rem;
  cursor: pointer;
`;
