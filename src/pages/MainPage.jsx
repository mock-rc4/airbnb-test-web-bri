import React from "react";
import styled from "styled-components";
import Footer from "../components/common/Footer/Footer";
import Experience from "../components/Main/Experience";
import AboutHosting from "../components/Main/AboutHosting";
import Idea from "../components/Main/Idea";
import CoronaText from "../components/Main/CoronaText";
import FlexSearch from "../components/Main/FlexSearch";
import Ukraine from "../components/Main/Ukraine";
import Header from "../components/common/Header/Header";
import SettingPopup from "../components/common/Header/SettingPopup";

const MainPage = () => {
  return (
    <>
      <CoronaText />
      <Header />

      <main>
        <Ukraine />
        <FlexSearch />
        <Idea />
        <Experience />
        <AboutHosting />
      </main>
      <Footer />
    </>
  );
};

export default MainPage;
