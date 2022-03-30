import axios from "axios";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { color, flexCenter } from "../common/styled";
import DetailInfoSection from "./DetailInfoSection";
import DetailTitleSection from "./DetailTitleSection";

const DetailContent = ({ contentRef }) => {
  //state

  return (
    <WrapperStyle ref={(el) => (contentRef.current[1] = el)}>
      <BoxStyle>
        <DetailInfoSection />
      </BoxStyle>
    </WrapperStyle>
  );
};

export default DetailContent;

const WrapperStyle = styled.main`
  width: 100%;
  ${flexCenter};
`;

const BoxStyle = styled.div`
  min-width: 110rem;
  width: 80%;
`;
