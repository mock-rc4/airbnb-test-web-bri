import React from "react";
import styled from "styled-components";
import { flexCenter, color } from "../common/styled";
import SearchMap from "../Search/SearchMap";

const LocationSection = ({ contentRef }) => {
  return (
    <WrapperStyle ref={(el) => (contentRef.current[3] = el)}>
      <BoxStyle>
        <h3>호스팅 지역</h3>
        <SearchMap />
      </BoxStyle>
    </WrapperStyle>
  );
};

export default LocationSection;

const WrapperStyle = styled.section`
  width: 100%;
  ${flexCenter}
`;

const BoxStyle = styled.div`
  min-width: 110rem;
  width: 80%;
  padding: 4rem 0;
  border-bottom: 1px solid ${color.medium_gray};
  h3 {
    font-size: 2.2rem;
    font-weight: 500;
    margin-bottom: 2rem;
  }
`;
