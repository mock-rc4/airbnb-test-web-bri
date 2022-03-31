import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { authButton, authInput, color, flexCenter } from "../common/styled";

//사용 api: 회원가입 api
const Signup = ({ handleSignup, email }) => {
  const colors = {
    success: "#aaaaaa",
    fail: "rgb(228, 56, 56)",
  };
  const messages = {
    name: "정부 발급 신분증에 표시된 이름과 일치하는지 확인하세요.",
    birth:
      "만 18세 이상의 성인만 회원으로 가입할 수 있습니다. 생일은 에어비앤비의 다른 회원에게 공개되지 않습니다.",
    email: "예약 확인과 영수증을 이메일로 보내드립니다.",
    password: "",
  };

  //local state
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [userBirth, setUserBirth] = useState("");
  const [userEmail, setUserEmail] = useState(email);
  const [userPassword, setUserPassword] = useState("");

  //message 및 색상
  const [nameError, setNameError] = useState({
    message: messages.name,
    color: colors.success,
  });
  const [birthError, setBirthError] = useState({
    message: messages.birth,
    color: colors.success,
  });
  const [emailError, setEmailError] = useState({
    message: messages.email,
    color: colors.success,
  });
  const [passwordError, setPasswordError] = useState({
    message: messages.password,
    color: colors.success,
  });

  //입력값 state 에 저장하는 함수
  const handleInputValue = (e) => {
    const {
      target: { name, value },
    } = e;
    if (name === "lastName") setLastName(value);
    else if (name === "firstName") setFirstName(value);
    else if (name === "userBirth") setUserBirth(value);
    else if (name === "userEmail") setUserEmail(value);
    else if (name === "userPassword") setUserPassword(value);
  };

  //유효성 검사 함수
  const handleCheck = () => {
    if (lastName.length !== 0 && firstName.length !== 0) {
      setNameError({ message: messages.name, color: colors.success });
    }
    if (userBirth.length !== 0) {
      setBirthError({ message: messages.birth, color: colors.success });
    }
    if (userBirth.length == 0) {
      setBirthError({
        message: "생년월일 형식을 확인해주세요.",
        color: colors.fail,
      });
    }
    if (userEmail.length !== 0) {
      setEmailError({ message: messages.email, color: colors.success });
    }
    if (userEmail.length == 0) {
      setEmailError({
        message: "이메일 형식을 확인해주세요.",
        color: colors.fail,
      });
    }
    if (userPassword.length !== 0) {
      setPasswordError({ message: messages.password, color: colors.success });
    }
    if (userPassword.length == 0) {
      setPasswordError({
        message: "비밀번호를 입력해주세요",
        color: colors.fail,
      });
    }
  };

  //회원가입 api 불러오기, 유효성 검사 같이 들어가야함.
  const handlePutUser = async () => {
    handleCheck(); //유효성검사

    try {
      const res = await axios({
        baseURL: "http://joon-serverlab.shop/",
        method: "post",
        url: `app/users/sign-up`,
        data: {
          lastName: lastName,
          firstName: firstName,
          userBirth: userBirth,
          userEmail: userEmail,
          userPassword: userPassword,
        },
      });
      console.log(res);
      if (
        res.data.code === 2027 ||
        res.data.code === 2026 ||
        res.data.code === 2025
      ) {
        //이름
        setNameError({ message: res.data.message, color: colors.fail });
      } else if (res.data.code === 2035) {
        //생년월일
        setBirthError({ message: res.data.message, color: colors.fail });
      } else if (res.data.code === 2016) {
        //이메일
        setEmailError({ message: res.data.message, color: colors.fail });
      } else if (res.data.code === 2030) {
        //이메일
        setPasswordError({ message: res.data.message, color: colors.fail });
      } else {
        handleSignup();
      }
    } catch (e) {
      console.log(e);
    }
  };

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
            <FirstNameInputStyle maincolor={nameError.color}>
              <span>이름</span>
              <input
                type="text"
                placeholder="이름(예: 길동)"
                name="firstName"
                onChange={handleInputValue}
              />
            </FirstNameInputStyle>
            <LastNameInputStyle maincolor={nameError.color}>
              <span>성</span>
              <input
                type="text"
                placeholder="성(예: 홍)"
                name="lastName"
                onChange={handleInputValue}
              />
              <p>{nameError.message}</p>
            </LastNameInputStyle>

            <BirthInputStyle maincolor={birthError.color}>
              <span>생년월일</span>
              <input
                type="date"
                placeholder="생년월일"
                name="userBirth"
                onChange={handleInputValue}
              />
              <p>{birthError.message}</p>
            </BirthInputStyle>

            <EmailInputStyle maincolor={emailError.color}>
              <span>이메일</span>
              <input
                type="text"
                defaultValue={email}
                name="userEmail"
                onChange={handleInputValue}
              />
              <p>{emailError.message}</p>
            </EmailInputStyle>

            <PasswordInputStyle maincolor={passwordError.color}>
              <span>비밀번호</span>
              <input
                type="password"
                placeholder="비밀번호"
                name="userPassword"
                onChange={handleInputValue}
              />
              <p>{passwordError.message}</p>
            </PasswordInputStyle>
            <p className="terms">
              <b>동의 및 계속하기</b> 버튼을 선택하면 에어비앤비 서비스 약관,
              결제 서비스 약관 및 차별 금지 정책에 동의하며 개인정보 처리방침
              정책을 이해하는 것입니다.
            </p>
            <button onClick={handlePutUser}>동의 및 계속하기</button>
          </section>
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

    button {
      ${authButton};
      margin-bottom: 2rem;
    }

    .terms {
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

const BirthInputStyle = styled.div`
  position: relative;
  input {
    ${authInput};
    border: 1px solid ${(props) => props.maincolor};
    &:focus {
      outline: 1.5px solid ${(props) => props.maincolor};
    }
  }
  p {
    margin-top: 1rem;
    margin-bottom: 2rem;
    font-size: 1.2rem;
    color: ${(props) => props.maincolor};
  }
  span {
    position: absolute;
    color: ${(props) => props.maincolor};
    font-size: 1.2rem;
    font-weight: 700;
    left: 1rem;
    top: 1rem;
  }
`;

const FirstNameInputStyle = styled(BirthInputStyle)``;
const LastNameInputStyle = styled(BirthInputStyle)``;
const EmailInputStyle = styled(BirthInputStyle)``;
const PasswordInputStyle = styled(BirthInputStyle)``;
