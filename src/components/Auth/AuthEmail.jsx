import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { authButton, color, authInput } from "../common/styled";
import AuthSocial from "./AuthSocial";
import axios from "axios";
import UseApi from "../../hook/UseApi";
import Signup from "./Signup";
import { useDispatch } from "react-redux";
import { inputUserIndex, isLogin } from "../../store/actions/login";
// import { customAxios } from "../../custom/customAxios";

const AuthEmail = ({ handleClickAuth }) => {
  //redux use
  const dispatch = useDispatch();

  //local state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [goSignup, setGoSignup] = useState(false);
  const [goPassword, setGoPassword] = useState(false);

  const emailPattern =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
  const colors = {
    success: "black",
    fail: "rgb(228, 56, 56)",
  };

  const [color, setColor] = useState(colors.success);

  const handleInputEmail = (e) => {
    const {
      target: { name, value },
    } = e;
    if (name === "email") {
      setEmail(value);
      //유효성 검사
      if (!emailPattern.test(value)) {
        setColor(colors.fail);
      } else {
        setColor(colors.success);
      }
    } else if (name === "password") setPassword(value);
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
      console.log(res);
      //로그인 성공하면 로그인 창 끄고, 리덕스에 유저 인덱스랑 로그인 상태값 넣어줌.
      if (res.data.isSuccess) {
        handleClickAuth();
        dispatch(isLogin(true));
        dispatch(inputUserIndex(res.data.result.userIdx));
        localStorage.setItem("jwt", res.data.result.jwt);
      }
      //비밀번호가 틀렸을 때
      else if (res.data.code === 3014) {
        setColor(colors.fail);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <AuthSectionBoxStyle>
        <h2>에어비앤비에 오신 것을 환영합니다.</h2>
        <section className="auth-email">
          <EmailInputStyle maincolor={color}>
            {!goPassword && (
              <>
                <p>이메일</p>
                <input
                  name="email"
                  type="text"
                  onChange={handleInputEmail}
                  placeholder="이메일"
                />
              </>
            )}
          </EmailInputStyle>
          {!goPassword && (
            <button className="emailOngoing" onClick={goPasswordApi}>
              계속
            </button>
          )}
          {/* 이부분을 말한거임 여기에  {}줘서 바꿔주기*/}
          <PasswordInputStyle maincolor={color}>
            {goPassword && (
              <>
                <p>비밀번호</p>
                <input
                  name="password"
                  type="password"
                  placeholder="비밀번호"
                  onChange={handleInputEmail}
                />
              </>
            )}
          </PasswordInputStyle>
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
  }
`;

const EmailInputStyle = styled.div`
  position: relative;
  input {
    ${authInput};
    border: 1px solid ${(props) => props.maincolor};
    &:focus {
      outline: 1.5px solid ${(props) => props.maincolor};
    }
  }
  p {
    position: absolute;
    color: ${(props) => props.maincolor};
    font-size: 1.2rem;
    font-weight: 700;
    left: 1rem;
    top: 30%;
    transform: translateY(-50%);
  }
`;
const PasswordInputStyle = styled(EmailInputStyle)``;
