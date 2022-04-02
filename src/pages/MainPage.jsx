import React, { useState, useEffect } from "react";
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
  //local state
  const [scrollY, setScrollY] = useState(window.scrollY);
  const [isfix, setIsFix] = useState(false);

  //life cycle
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollY]);

  //스크롤 관여 함수
  const handleScroll = () => {
    setScrollY(window.scrollY);
    if (scrollY > 50) {
      setIsFix(true);
    } else {
      setIsFix(false);
    }
  };

  return (
    <>
      <CoronaText />
      <Header
        isfix={isfix}
        boxshadow=""
        widthper="90%"
        position="sticky"
        minwidth=""
      />
      <main>
        <Ukraine />
        <FlexSearch />
        <Idea />
        <Experience />
        <AboutHosting />
      </main>
      <Footer widthper="90%" />
    </>
  );
};

export default MainPage;
