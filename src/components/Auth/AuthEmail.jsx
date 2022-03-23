import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { authButton, color } from "../common/styled";
import AuthSocial from "./AuthSocial";
import axios from "axios";
import UseApi from "../../hook/UseApi";
import Signup from "./Signup";
// import { customAxios } from "../../custom/customAxios";

const AuthEmail = () => {
  //local state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [goSignup, setGoSignup] = useState(false);
  const [goPassword, setGoPassword] = useState(false);

  //여기서 유효성 검사 해주고, 조건에 안맞으면 아예 안넘어가게 해버리자

  const handleInputEmail = (e) => {
    const {
      target: { name, value },
    } = e;
    if (name === "email") setEmail(value);
    else if (name === "password") setPassword(value);
  };

  const handleSignup = useCallback(() => {
    setGoSignup(!goSignup);
  }, [goSignup]);

  const goPasswordApi = async () => {
    try {
      const res = await axios({
        baseURL: "http://joon-serverlab.shop/",
        method: "get",
        url: `app/users/email-check/${email}`,
        params: { useEmail: email },
      });
      if (res.data.isSuccess) {
        //생성가능한 이메일이면 signup 창 띄워줌.
        setGoSignup(true);
      } else if (res.data.code === 2017) {
        //이미 존재하는 이메일이면, 비밀번호 input 불러옴
        console.log(res.data.message);
        setGoPassword(true);
      }
    } catch (e) {
      console.log(e);
      //로그인 시도 했을 때 2018번 오류가 나면 handleSignup 실행해줌.
    }
  };

  const inLoginApi = async () => {
    try {
      const res = await axios({
        baseURL: "http://joon-serverlab.shop/",
        method: "post",
        url: `app/users/log-in`,
        data: { userEmail: email, userPassword: password },
      });
      console.log(`로그인 api 의 결과는 ${res}`);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <AuthSectionBoxStyle>
        <h2>에어비앤비에 오신 것을 환영합니다.</h2>
        <section className="auth-email">
          {!goPassword && (
            <input
              name="email"
              type="text"
              placeholder="이메일"
              onChange={handleInputEmail}
            />
          )}
          {!goPassword && (
            <button className="emailOngoing" onClick={goPasswordApi}>
              계속
            </button>
          )}
          {/* 이부분을 말한거임 여기에  {}줘서 바꿔주기*/}
          {goPassword && (
            <input
              name="password"
              type="password"
              placeholder="비밀번호"
              onChange={handleInputEmail}
            />
          )}
          {goPassword && (
            <button className="emailOngoing" onClick={inLoginApi}>
              계속
            </button>
          )}
        </section>
      </AuthSectionBoxStyle>
      {goSignup && <Signup handleSignup={handleSignup} email={email} />}
    </>
  );
};
export default AuthEmail;

const AuthSectionBoxStyle = styled.section`
  height: fit-content;
  border-radius: 1.5rem;
  box-sizing: border-box;
  padding: 2rem;
  padding-bottom: 0;
  position: relative;

  h2 {
    font-size: 22px;
    font-weight: 540;
    padding: 15px 0;
  }

  .emailOngoing {
    ${authButton};
  }

  .auth-email {
    margin: 1rem 0;
    input {
      width: 100%;
      box-sizing: border-box;
      font-size: 16px;
      padding: 1.8rem 1.2rem;
      border: 1px solid ${color.medium_gray2};
      border-radius: 9px;

      &:focus {
        outline: 1.5px solid ${color.black};
        //padding: 2.4rem 1.2rem 1.2rem 1.2rem;
      }
    }
  }
`;
