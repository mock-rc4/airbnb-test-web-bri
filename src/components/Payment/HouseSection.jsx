import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { color } from "../common/styled";
import { ReactComponent as Star } from "../../svg/ic-star.svg";
import BoxPrice from "../Detail/BoxPrice";

import HouseInfo from "./HouseInfo";

const HouseSection = () => {
  //-----------------------------------------------------
  return (
    <BoxStyle>
      <HouseInfo />
      <div className="price-section">
        <h2>요금 세부정보</h2>
        <BoxPrice infotext={false} />
      </div>
    </BoxStyle>
  );
};

export default HouseSection;

const BoxStyle = styled.div`
  width: 45rem;
  height: fit-content;
  position: sticky;
  top: 10rem;
  border: 1px solid ${color.medium_gray};
  border-radius: 1rem;
  padding: 2.2rem;
  margin-bottom: 10rem;

  .price-section {
    h2 {
      font-size: 2.2rem;
      font-weight: 500;
      padding: 2rem 0;
      width: 100%;
      border-top: 1px solid ${color.medium_gray};
    }
    width: 100%;
    box-sizing: border-box;
    margin-top: 0.5rem;
  }
`;
