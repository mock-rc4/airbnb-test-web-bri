import React from "react";
import styled from "styled-components";
import Header from "../components/common/Header/Header";
import Footer from "../components/common/Footer/Footer";
import Filter from "../components/Search/Filter";
import SearchContent from "../components/Search/SearchContent";

const SearchPage = () => {
  return (
    <>
      <Header isfix="true" widthper="95%" position="sticky" boxshadow="false" />
      <Filter />
      <SearchContent />
      <Footer widthper="90%" />
    </>
  );
};

export default SearchPage;
