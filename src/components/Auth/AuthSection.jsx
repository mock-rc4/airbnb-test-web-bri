import React from "react";
import styled from "styled-components";
import { flexCenter, color, authInput } from "../common/styled";
import AuthSocial from "./AuthSocial";
import { authButton } from "../common/styled";
import { ReactComponent as DownArrow } from "../../svg/ic-downarrow.svg";

const AuthSection = () => {
  //global state
  //local state
  // life cycle
  // function

  return (
    <AuthSectionBoxStyle>
      <h2>에어비앤비에 오신 것을 환영합니다.</h2>

      <section className="auth-phone">
        <DownArrowStyle />
        <div>
          <p className="country-text">국가/지역</p>
          <select name="nation">
            <option value="한국 (+82)">한국 (+82)</option>
            <option value="미국 (+1)">미국 (+1)</option>
            <option value="캐나다 (+1)">캐나다 (+1)</option>
          </select>

          {/* <input type="text" /> */}
          <InputStyle>
            <p className="country-text">전화번호</p>
            <input type="text" placeholder="전화번호" />
          </InputStyle>
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
    </AuthSectionBoxStyle>
  );
};

export default AuthSection;

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

  .auth-phone {
    width: 100%;
    display: flex;
    flex-direction: column;
    ${flexCenter}
    &>div {
      width: 100%;
      border: 1px solid ${color.medium_gray2};
      border-radius: 10px;
      overflow: hidden;
      margin-top: 10px;
      position: relative;
    }

    .country-text {
      position: absolute;
      top: 2px;
      left: 1rem;
      z-index: 10;
      color: ${color.medium_gray2};
    }

    select {
      width: 100%;
      padding: 2.6rem 1rem 1rem 1rem;
      border: none;
      border-bottom: 1px solid ${color.medium_gray2};
      font-size: 1.6rem;
      -webkit-appearance: none;
      color: ${color.dark_gray2};
      box-sizing: border-box;
      position: relative;

      &:focus {
        //border: 1px solid ${color.black};
        outline: none;
        border-radius: 9px;
      }
    }

    input {
      ${authInput};
      border: none;
      &:focus {
        outline: none;
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
      ${authButton};
    }
  }
`;

const InputStyle = styled.div`
  position: relative;
  p {
    position: absolute;
    top: 1px;
    left: 1rem;
    font-size: 1.2rem;
  }
`;

const DownArrowStyle = styled(DownArrow)`
  position: absolute;
  right: 3.5rem;
  top: 10rem;
  z-index: 10;
`;
