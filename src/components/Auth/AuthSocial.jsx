import React from "react";
import styled from "styled-components";
import { ReactComponent as Facebook } from "../../svg/ic-login-facebook.svg";
import { ReactComponent as Google } from "../../svg/ic-login-google.svg";
import { ReactComponent as Apple } from "../../svg/ic-login-apple.svg";
import { ReactComponent as Email } from "../../svg/ic-login-email.svg";
import { flexCenter, color } from "../common/styled";
import { auth } from "../../firebase/fBase";
import {
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithPopup,
} from "firebase/auth";

const AuthSocial = ({ authMethod, handleClickToggle }) => {
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

  const handleClickBtn = () => {
    handleClickToggle();
  };
  return (
    <>
      <OrStyle>또는</OrStyle>
      <AuthSocailStyle>
        <button onClick={onFacebookClick}>
          <Facebook className="sns-logo" />
          페이스북으로 로그인하기
        </button>
        <button onClick={onGoogleClick}>
          <Google className="sns-logo" />
          구글로 로그인하기
        </button>
        <button>
          <Apple className="sns-logo" />
          애플로 로그인하기
        </button>
        <button onClick={handleClickBtn}>
          <Email className="sns-logo" />
          {authMethod}로 로그인하기
        </button>
      </AuthSocailStyle>
    </>
  );
};

export default AuthSocial;

const OrStyle = styled.p`
  width: 100%;
  text-align: center;
  font-size: 12px;
  color: ${color.dark_gray};

  &:before{
      content="......";
  }
`;

const AuthSocailStyle = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    ${flexCenter}
    padding: 1rem 2rem 2rem 2rem;
    box-sizing: border-box;

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

      .sns-logo {
        position: absolute;
        width: 20px;
        top: 11px;
        left: 20px;
      }
    }
  }
  `;
