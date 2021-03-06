// route 처리
import { Routes, Route } from "react-router-dom";
import firebase from "firebase/compat/app";
import MainPage from "../pages/MainPage";
import SearchPage from "../pages/SearchPage";
import Test from "../components/Detail/Test";
import DetailPage from "../pages/DetailPage";
import HostingStartPage from "../pages/Hosting/HostingStartPage";
import PropertyTypePage from "../pages/Hosting/PropertyTypePage";
import PrivacyTypePage from "../pages/Hosting/PrivacyTypePage";
import AddressPage from "../pages/Hosting/AddressPage";
import FloorPlanPage from "../pages/Hosting/FloorPlanPage";
import SettingPage from "../pages/Setting/SettingPage";
import PersonalPage from "../pages/Setting/PersonalPage";
import RoomImagePage from "../pages/Hosting/RoomImagePage";
import RoomNamePage from "../pages/Hosting/RoomNamePage";
import RoomContentPage from "../pages/Hosting/RoomContentPage";
import RoomPricePage from "../pages/Hosting/RoomPrice";
import ConfirmPage from "../pages/Hosting/ConfirmPage";
import CompletePage from "../pages/Hosting/CompletePage";
import PaymentPage from "../pages/PaymentPage";
import TripPage from "../pages/TripPage";
import ManagementPage from "../pages/ManagementPage";
import ReservationPage from "../pages/ReservationPage";
import WishListPage from "../pages/WishListPage";

const RootRoute = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/test" element={<Test />} />
        {/* detail , 예약페이지 관련 */}
        <Route path="/detail/:houseIdx" element={<DetailPage />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/reservation" element={<ReservationPage />} />
        {/* hosting */}
        <Route path="/hosting" element={<HostingStartPage />} />
        <Route path="/hosting/property" element={<PropertyTypePage />} />
        <Route path="/hosting/privacy" element={<PrivacyTypePage />} />
        <Route path="/hosting/address" element={<AddressPage />} />
        <Route path="/hosting/floorplan" element={<FloorPlanPage />} />
        <Route path="/hosting/roomimage" element={<RoomImagePage />} />
        <Route path="/hosting/roomname" element={<RoomNamePage />} />
        <Route path="/hosting/roomcontent" element={<RoomContentPage />} />
        <Route path="/hosting/roomprice" element={<RoomPricePage />} />
        <Route path="/hosting/confirm" element={<ConfirmPage />} />
        <Route path="/hosting/complete" element={<CompletePage />} />
        {/* trip(예약확인) */}
        <Route path="/trip" element={<TripPage />} />
        {/* wishlist */}
        <Route path="/wishlist" element={<WishListPage />} />
        {/* management*/}
        <Route path="/management" element={<ManagementPage />} />
        {/* setting */}
        <Route path="/setting" element={<SettingPage />} />
        <Route path="/setting/personal" element={<PersonalPage />} />
      </Routes>
    </>
  );
};

export default RootRoute;
