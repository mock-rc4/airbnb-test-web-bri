import React from "react";
import styled from "styled-components";
import { authButton, authInput, color, flexCenter } from "../common/styled";

const Signup = ({ handleSignup, email }) => {
  return (
    <>
      <ModalBoxStyle>
        {/* 모달창 */}
        <div className="auth-content">
          <div className="title">
            <span onClick={handleSignup}>✕</span>
            <h3>회원 가입 완료하기</h3>
          </div>
          {/* 섹션이 바로 잇음 */}
          <section className="signup-section">
            <div className="name">
              <input type="text" placeholder="이름(예: 길동)" />
              <input type="text" placeholder="성(예: 홍)" />
              <p className="info-text">
                정부 발급 신분증에 표시된 이름과 일치하는지 확인하세요.
              </p>
            </div>
            <div className="birth">
              <input type="date" placeholder="생년월일" />
              <p className="info-text">
                만 18세 이상의 성인만 회원으로 가입할 수 있습니다. 생일은
                에어비앤비의 다른 회원에게 공개되지 않습니다.
              </p>
            </div>
            <div className="email">
              <input type="text" value={email} />
              <p className="info-text">
                예약 확인과 영수증을 이메일로 보내드립니다.
              </p>
            </div>
            <div className="password">
              <input type="password" placeholder="비밀번호" />
              <p></p>
            </div>
            <p className="terms">
              <b>동의 및 계속하기</b> 버튼을 선택하면 에어비앤비 서비스 약관,
              결제 서비스 약관 및 차별 금지 정책에 동의하며 개인정보 처리방침
              정책을 이해하는 것입니다.
            </p>
            <button>동의 및 계속하기</button>
          </section>

          {/* 회원가입 컨텐츠 작성 */}
        </div>

        {/* 뒤에 까만 배경 */}
        <div
          className="back"
          onClick={(e) => {
            e.preventDefault();
            if (handleSignup) handleSignup();
          }}
        ></div>
      </ModalBoxStyle>
    </>
  );
};

export default Signup;

const ModalBoxStyle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 2000;
  ${flexCenter};

  .auth-content {
    position: absolute;
    width: 568px;
    background: white;
    border-radius: 1.5rem;
    box-sizing: border-box;
    z-index: 10;
    padding: 0 2rem;

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
  .signup-section {
    display: flex;
    flex-direction: column;
    margin-top: 2rem;
    .name {
      display: flex;
      flex-direction: column;
    }

    input {
      ${authInput};
    }
    button {
      ${authButton};
    }
    .info-text {
      margin-top: 1rem;
      margin-bottom: 2rem;
      font-size: 1.2rem;
      color: ${color.input_gray};
    }
    .terms {
      margin-top: 2rem;
      margin-bottom: 1rem;
      font-size: 1.2rem;
      line-height: 1.5rem;
      color: ${color.black};
      b {
        font-weight: 600;
      }
    }
  }

  .back {
    width: 100vw;
    height: 100vh;
    position: fixed;
    background: none;
    top: 0;
  }
`;
