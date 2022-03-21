import React from "react";
import styled from "styled-components";
import SearchListSection from "./SearchListSection";
import SearchMap from "./SearchMap";

const SearchContent = () => {
  return (
    <>
      <WrapStyle>
        <SearchListSection />
        <SearchMap />
      </WrapStyle>
    </>
  );
};

export default SearchContent;

const WrapStyle = styled.section`
  width: 100%;
  height: fit-content;
  display: flex;
  // padding-top: 144px;
`;
