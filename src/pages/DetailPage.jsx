import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Header from "../components/common/Header/Header";
import Footer from "../components/common/Footer/Footer";
import Detail from "../components/Detail/Detail";

const DetailPage = () => {
  return (
    <>
      <Header
        isfix="true"
        widthper="80%"
        position=""
        boxshadow="0rem 0.1rem 0.5rem 0.1rem"
        minwidth="110rem"
      />
      <Detail />
      <Footer widthper="80%" />
    </>
  );
};

export default DetailPage;
