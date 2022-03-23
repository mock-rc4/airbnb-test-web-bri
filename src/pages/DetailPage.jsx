import React from "react";
import styled from "styled-components";
import Header from "../components/common/Header/Header";
import Footer from "../components/common/Footer/Footer";
import DetailContent from "../components/Detail/DetailContent";

const DetailPage = () => {
  return (
    <>
      <Header
        isfix="true"
        widthper="80%"
        position=""
        boxshadow="true"
        minwidth="110rem"
      />
      <DetailContent />
      <Footer widthper="80%" />
    </>
  );
};

export default DetailPage;
