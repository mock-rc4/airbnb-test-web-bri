import React, { useState } from "react";
import styled from "styled-components";
import { flexCenter, color } from "../common/styled";
import AuthEmail from "./AuthEmail";
import AuthSection from "./AuthSection";
import AuthSocial from "./AuthSocial";
import Signup from "./Signup";

const AuthModal = ({ handleClickAuth }) => {
  //local state
  const [toggleAuthMethod, setToggleAuthMethod] = useState({
    method: "phone",
    text: "이메일",
  });

  //function
  const handleClickToggle = () => {
    if (toggleAuthMethod.method === "phone")
      setToggleAuthMethod({ method: "email", text: "핸드폰으" });
    else if (toggleAuthMethod.method === "email")
      setToggleAuthMethod({ method: "phone", text: "이메일" });
  };

  return (
    <ModalBoxStyle>
      {/* 모달창 */}
      <div className="auth-content">
        <div className="title">
          <span onClick={handleClickAuth}>✕</span>
          <h3>로그인 또는 회원 가입</h3>
        </div>
        {toggleAuthMethod.method === "phone" && <AuthSection />}
        {toggleAuthMethod.method === "email" && (
          <AuthEmail handleClickAuth={handleClickAuth} />
        )}
        {/* <Signup /> */}
        <AuthSocial
          authMethod={toggleAuthMethod.text}
          handleClickToggle={handleClickToggle}
        />
      </div>

      {/* 뒤에 까만 배경 */}
      <div
        className="back"
        onClick={(e) => {
          e.preventDefault();
          if (handleClickAuth) handleClickAuth();
        }}
      ></div>
    </ModalBoxStyle>
  );
};

export default AuthModal;

const ModalBoxStyle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1000;
  ${flexCenter};

  .auth-content {
    position: absolute;
    width: 568px;

    background: white;
    border-radius: 1.5rem;
    box-sizing: border-box;
    z-index: 10;

    // 애니메이션
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(20rem);
      }
      to {
        opacity: 1;
      }
    }
    animation: fadeInUp 0.3s;

    .title {
      ${flexCenter}
      padding: 23px 0;
      border-bottom: 1px solid ${color.medium_gray};
      span {
        position: absolute;
        left: 20px;
        font-size: 15px;
        cursor: pointer;
        border-radius: 50%;
        padding: 7px 9px;
      }
      span:hover {
        background: ${color.light_gray};
      }
      h3 {
        font-size: 16px;
        font-weight: 900;
      }
    }
  }

  .back {
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: 7;
  }
`;
