import React from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { authButton, color, flexCenter } from "../../components/common/styled";
import { ReactComponent as Logo } from "../../svg/ic-logo-only.svg";

const LeftSection = ({ title, subtitle }) => {
  const navigate = useNavigate();
  return (
    <WrapperStyle>
      <div className="logo">
        <LogoStyle onClick={() => navigate("/")} />
      </div>
      <div className="text">
        <h1>{title}</h1>
        <h3>{subtitle}</h3>
      </div>
    </WrapperStyle>
  );
};

export default LeftSection;

const WrapperStyle = styled.div`
  background: linear-gradient(180deg, rgb(240, 1, 126), rgb(60, 30, 150));
  position: relative;
  width: 100%;
  .logo {
    padding: 5rem;
  }
  .text {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    padding: 5rem;
    box-sizing: border-box;
    h1 {
      width: 100%;
      color: white;
      font-size: 4.8rem;
      font-weight: 520;
      word-break: keep-all;
      line-height: 5.5rem;
      width: 90%;
    }
    h3 {
      color: white;
      font-size: 2.2rem;
      padding-top: 2rem;
      line-height: 3rem;
      word-break: keep-all;
      width: 90%;
    }
  }
`;

const LogoStyle = styled(Logo)`
  cursor: pointer;
`;
