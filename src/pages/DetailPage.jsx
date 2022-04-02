import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Header from "../components/common/Header/Header";
import Footer from "../components/common/Footer/Footer";
import Detail from "../components/Detail/Detail";
import { useParams } from "react-router";
import { useDispatch } from "react-redux";
import { storeHouseIdx } from "../store/actions/storeHouseIdx";
import { useSelector } from "react-redux";

const DetailPage = () => {
  //state
  const dispatch = useDispatch();
  //useParams 로 데이터 넘겨주기
  let { houseIdx } = useParams();

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
