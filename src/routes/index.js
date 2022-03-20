// route 처리

import { BrowserRouter, Routes, Route } from "react-router-dom";
import firebase from "firebase/compat/app";
import MainPage from "../pages/MainPage";

const RootRoute = () => {
  return (
    <>
      <MainPage />
    </>
  );
};

export default RootRoute;
