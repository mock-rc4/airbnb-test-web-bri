import React from "react";
import styled from "styled-components";
import { flexCenter, color } from "../common/styled";
import { auth } from "../../firebase/fBase";
import {
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithPopup,
} from "firebase/auth";

const AuthSection = () => {
  //global state
  //local state
  // life cycle
  // function
  const onGoogleClick = async (e) => {
    const {
      target: { name },
    } = e;
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const credential = GoogleAuthProvider.credentialFromResult(result);
    } catch (e) {
      console.log(e);
    }
  };

  const onFacebookClick = async (e) => {
    const {
      target: { name },
    } = e;
    try {
      const provider = new FacebookAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const credential = FacebookAuthProvider.credentialFromResult(result);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <AuthSectionBoxStyle>
      <h2>에어비앤비에 오신 것을 환영합니다.</h2>
      <section className="auth-phone">
        <div>
          <input type="text" />
          <input type="text" placeholder="전화번호" />
        </div>
        <p>
          전화나 문자로 전화번호를 확인하겠습니다. 일반 문자 메시지 요금 및
          데이터 요금이 부과됩니다.{" "}
          <a href="https://www.airbnb.co.kr/help/article/2855/에어비앤비-개인정보-보호">
            개인정보 처리방침
          </a>
        </p>
        <button>계속</button>
      </section>
      <p className="or">또는</p>
      <section className="auth-social">
        <button onClick={onFacebookClick}>
          <img src="/image/ic-login-facebook.svg" />
          페이스북으로 로그인하기
        </button>
        <button onClick={onGoogleClick}>
          <img src="/image/ic-login-google.svg" />
          구글로 로그인하기
        </button>
        <button>
          <img src="/image/ic-login-apple.svg" />
          애플로 로그인하기
        </button>
        <button>
          <img src="/image/ic-login-email.svg" />
          이메일로 로그인하기
        </button>
      </section>
    </AuthSectionBoxStyle>
  );
};

export default AuthSection;

const AuthSectionBoxStyle = styled.section`
  height: 580px;
  overflow-y: scroll;
  border-radius: 1.5rem;
  box-sizing: border-box;
  padding: 2rem;

  h2 {
    font-size: 22px;
    font-weight: 540;
    padding: 15px 0;
  }

  .auth-phone {
    width: 100%;
    display: flex;
    flex-direction: column;
    ${flexCenter}
    &>div {
      width: 100%;
      border: 1px solid ${color.dark_gray};
      border-radius: 10px;
      overflow: hidden;
      margin-top: 10px;
    }

    input {
      width: 100%;
      box-sizing: border-box;
      font-size: 16px;
      padding: 18px 10px;
      border: none;
      box-sizing: border-box;
      &:nth-child(1) {
        border-bottom: 1px solid ${color.dark_gray};
      }

      &:focus {
        border: 2px solid ${color.black};
        outline: none;
        border-radius: 10px;
      }
    }
    p {
      margin-top: 5px;
      font-size: 12px;
      color: ${color.dark_gray};
      line-height: 16px;
      a {
        color: ${color.black};
        font-weight: 500;
        text-decoration: underline;
      }
    }
    button {
      width: 100%;
      border: none;
      border-radius: 10px;
      color: white;
      padding: 15px;
      margin: 15px;
      font-size: 16px;
      cursor: pointer;
      background: linear-gradient(
        to right,
        rgb(230, 1, 60) 0%,
        rgb(220, 1, 126) 100%
      );
    }
  }
  .or {
    width: 100%;
    text-align: center;
    font-size: 12px;
    color: ${color.dark_gray};
    padding: 8px 0;
  }

  .auth-social {
    width: 100%;
    display: flex;
    flex-direction: column;
    ${flexCenter}

    button {
      position: relative;
      width: 100%;
      box-sizing: border-box;
      background: white;
      padding: 15px 0;
      margin: 8px 0;
      border: 1px solid black;
      border-radius: 8px;
      font-weight: 550;
      cursor: pointer;

      img {
        position: absolute;
        width: 20px;
        top: 11px;
        left: 20px;
      }
    }
  }
`;
