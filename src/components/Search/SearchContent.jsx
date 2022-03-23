import React from "react";
import styled from "styled-components";
import SearchListSection from "./SearchListSection";
import SearchMap from "./SearchMap";

const SearchContent = () => {
  return (
    <WrapStyle>
      <SearchListSection />
      <div className="map-content">
        <SearchMap />
      </div>
    </WrapStyle>
  );
};

export default SearchContent;

const WrapStyle = styled.section`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: 58fr 42fr;

  .map-content {
    position: sticky;
    top: 161.5px;
    height: 76vh;
  }
`;
