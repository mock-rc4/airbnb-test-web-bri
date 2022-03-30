import React, { useEffect } from "react";
import styled from "styled-components";
import { color, flexCenter } from "../components/common/styled";
import { ReactComponent as Logo } from "../svg/ic-logo.svg";
import { ReactComponent as Back } from "../svg/ic-back.svg";
import HouseSection from "../components/Payment/HouseSection";
import PaySection from "../components/Payment/PaySection";
import { useNavigate } from "react-router";
import Footer from "../components/common/Footer/Footer";
import { useSelector } from "react-redux";
import axios from "axios";

const PaymentPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <WrapperStyle>
        <HeaderStyle>
          <LogoStyle onClick={() => navigate("/")} />
        </HeaderStyle>
        <MainStyle>
          <div>
            <div className="title-section">
              <BackStyle />
              <h1>예약 요청</h1>
            </div>
            <div className="content">
              <div className="pay-section">
                <PaySection />
              </div>
              <div className="house-section">
                <HouseSection />
              </div>
            </div>
          </div>
        </MainStyle>
        <Footer />
      </WrapperStyle>
    </>
  );
};

export default PaymentPage;

const WrapperStyle = styled.div`
  width: 100%;
`;

const HeaderStyle = styled.header`
  border-bottom: 1px solid ${color.medium_gray};
`;

const MainStyle = styled.main`
  width: 100%;
  ${flexCenter}

  & > div {
    width: 78%;
  }
  .title-section {
    ${flexCenter};
    position: relative;
    justify-content: flex-start;
    h1 {
      font-size: 3.2rem;
      font-weight: 500;
      padding-top: 3px;
      padding: 5rem 0;
      margin-left: 4rem;
    }
  }
  .content {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  .house-section {
    display: flex;
    justify-content: flex-end;
  }
`;

const LogoStyle = styled(Logo)`
  fill: ${color.Main};
  padding: 2rem;
  cursor: pointer;
`;

const BackStyle = styled(Back)`
  transform: scale(0.9) translateY(-50%);
  position: absolute;
  top: 47%;
  left: -1.7rem;
  padding: 1.1rem;
  margin-right: 1.5rem;
  &:hover {
    border-radius: 50%;
    background: ${color.light_gray};
  }
`;
