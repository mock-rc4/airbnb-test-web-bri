import React from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { authButton, color, flexCenter } from "../../components/common/styled";
import { ReactComponent as Logo } from "../../svg/ic-logo-only.svg";

const HostingStartPage = () => {
  const navigate = useNavigate();
  return (
    <WrapperStyle>
      <LeftSectionStyle>
        <div className="logo">
          <LogoStyle onClick={() => navigate("/")} />
        </div>
        <div className="text">
          <h1>
            에어비앤비의<br></br>핵심을 이루는<br></br>호스팅
          </h1>
          <button onClick={() => navigate("/hosting/property")}>
            호스팅 시작하기
          </button>
        </div>
      </LeftSectionStyle>
      <RightSectionStyle>
        <video
          src="https://a0.muscache.com/v/a9/a7/a9a7873c-95de-5e37-8995-a5abb5b6b02f/a9a7873c95de5e378995a5abb5b6b02f_4000k_1.mp4"
          autoPlay
          loop
          muted
        ></video>
      </RightSectionStyle>
    </WrapperStyle>
  );
};

export default HostingStartPage;

const WrapperStyle = styled.main`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const LogoStyle = styled(Logo)`
  cursor: pointer;
`;

const LeftSectionStyle = styled.div`
  background: black;
  position: relative;
  .logo {
    padding: 5rem;
  }

  .text {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
    ${flexCenter};
    flex-direction: column;

    h1 {
      width: 100%;
      color: white;
      font-size: 6.4rem;
      font-weight: 520;
      line-height: 7rem;
      text-align: center;
      padding-bottom: 5rem;
    }
    button {
      ${authButton}
      width:14rem;
    }
  }
`;

const RightSectionStyle = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  video {
    width: 100%;
  }
`;
