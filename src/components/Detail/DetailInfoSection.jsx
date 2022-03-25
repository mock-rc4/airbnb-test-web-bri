import React from "react";
import styled from "styled-components";
import { color, flexCenter } from "../common/styled";
import InformationBox from "./InformationBox";
import ReservationBox from "./ReservationBox";
import { ReactComponent as Report } from "../../svg/ic-report.svg";

const DetailInfoSection = () => {
  return (
    <>
      <WrapperStyle>
        <div className="infor-box">
          <InformationBox />
        </div>
        <div className="reserv-box">
          <ReservationBox />
        </div>
      </WrapperStyle>
    </>
  );
};

export default DetailInfoSection;

const BoxStyle = styled.div`
  min-width: 110rem;
  width: 80%;
`;

const WrapperStyle = styled.section`
  width: 100%;
  height: auto;
  margin: 5rem 0;
  position: relative;
  border-bottom: 1px solid ${color.medium_gray};
  display: grid;
  grid-template-columns: 2fr 1fr;
  .reserv-box {
    width: 100%;
    height: auto;
    padding-bottom: 10rem;
    position: relative;
  }
`;
