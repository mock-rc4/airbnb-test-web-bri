// route 처리
import { Routes, Route } from "react-router-dom";
import firebase from "firebase/compat/app";
import MainPage from "../pages/MainPage";
import SearchPage from "../pages/SearchPage";
import Test from "../components/Detail/Test";
import DetailPage from "../pages/DetailPage";
import HostingStartPage from "../pages/HostingPage/HostingStartPage";
import PropertyTypePage from "../pages/HostingPage/PropertyTypePage";
import PrivacyTypePage from "../pages/HostingPage/PrivacyTypePage";
import AddressPage from "../pages/HostingPage/AddressPage";
import FloorPlanPage from "../pages/HostingPage/FloorPlanPage";
import SettingPage from "../pages/SettingPage";
const RootRoute = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/test" element={<Test />} />
        <Route path="/detail" element={<DetailPage />} />
        <Route path="/hosting" element={<HostingStartPage />} />
        <Route path="/hosting/property" element={<PropertyTypePage />} />
        <Route path="/hosting/privacy" element={<PrivacyTypePage />} />
        <Route path="/hosting/address" element={<AddressPage />} />
        <Route path="/hosting/floor-plan" element={<FloorPlanPage />} />
        <Route path="/setting" element={<SettingPage />} />
      </Routes>
    </>
  );
};

export default RootRoute;
