import React, { useCallback, useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { flexCenter, color, deviceSize } from "../styled";
import SettingPopup from "./SettingPopup";
import { ReactComponent as Logo } from "../../../svg/ic-logo.svg";
import { ReactComponent as Global } from "../../../svg/ic-global.svg";
import { ReactComponent as Hamburger } from "../../../svg/ic-hamburger.svg";
import { ReactComponent as Profile } from "../../../svg/ic-profile.svg";
import { ReactComponent as Search } from "../../../svg/ic-search.svg";
import SearchText from "./SearchText";
import SearchBar from "./SearchBar";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { openSearchBar } from "../../../store/actions/openSearchBar";

const Header = ({ isfix, widthper, position, boxshadow, minwidth }) => {
  const dispatch = useDispatch();
  const searchInfo = useSelector((state) => state.searchHouseReducer);

  //local state
  const [popupOpen, setPopupOpen] = useState(false);
  const fixedRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    if (isfix) {
      dispatch(openSearchBar(false));
    } else {
      dispatch(openSearchBar(true));
    }
  }, [isfix]);

  //function
  const handleClickPopup = useCallback(() => {
    setPopupOpen(!popupOpen);
  }, [popupOpen]);

  const handleGoMain = () => {
    navigate("/");
  };

  const handleClickMini = () => {
    dispatch(openSearchBar(true));
  };

  return (
    <>
      <BoxStyle
        ref={fixedRef}
        isfix={isfix}
        position={position}
        boxshadow={boxshadow}
      >
        <HeadSectionStyle widthper={widthper} minwidth={minwidth}>
          <button className="interactive">어디로 여행가세요?</button>

          {popupOpen && (
            <SettingPopup
              popupOpen={popupOpen}
              handleClickPopup={handleClickPopup}
            />
          )}
          <nav>
            <LogoStyle isfix={isfix} onClick={handleGoMain} />

            <div className="header-middle">
              <SearchMinimizeStyle isfix={isfix} onClick={handleClickMini}>
                <span>
                  {searchInfo.location ? searchInfo.location : "지역"}
                </span>
                <span>
                  {searchInfo.checkout
                    ? `${searchInfo.checkin.slice(
                        5,
                        7
                      )}월 ${searchInfo.checkin.slice(
                        8,
                        10
                      )}일~${searchInfo.checkout.slice(8, 10)}일`
                    : "날짜 선택"}
                </span>
                <span>
                  {searchInfo.people
                    ? `게스트 ${searchInfo.people} 명`
                    : "인원"}
                </span>
                <button className="search-button">
                  <Search />
                </button>
              </SearchMinimizeStyle>
            </div>

            <div className="header-right">
              <BecomehostStyle
                isfix={isfix}
                onClick={() => navigate("/hosting")}
              >
                호스트 되기
              </BecomehostStyle>
              <GlobalStyle isfix={isfix} />
              <button onClick={handleClickPopup}>
                <HamburgerStyle />
                <ProfileStyle />
              </button>
            </div>
          </nav>
        </HeadSectionStyle>

        <SearchText isfix={isfix} />
        <SearchBar isfix={isfix} />
      </BoxStyle>
    </>
  );
};

export default Header;

const BoxStyle = styled.header`
  box-shadow: ${(props) => props.boxshadow} ${color.light_gray2};
  z-index: 3;
  width: 100%;
  ${flexCenter}
  background: ${(props) => (props.isfix ? "white" : `${color.black}`)};
  position: ${(props) => props.position};
  top: 0;
  .interactive {
    color: white;
    background: white;
    width: 100%;
    text-align: center;
    border: none;
    border-radius: 2rem;
    padding: 1.5rem;
    color: black;
    display: none;
    font-weight: 500;
    font-size: 1.4rem;
    @media ${deviceSize.mobile} {
      display: block;
    }
  }
`;
const HeadSectionStyle = styled.div`
  width: ${(props) => props.widthper};
  min-width: ${(props) => props.minwidth};
  ${flexCenter}
  flex-direction: column;
  position: relative;
 
  nav {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding: 1.8rem 0;
    width: 100%;
    @media ${deviceSize.mobile} {
      display: none;
    }

    .header-middle{
      ${flexCenter};
    }

    .header-right {
      color: white;
      ${flexCenter}
      justify-content:flex-end;
      box-sizing: border-box;
      & > button {
        border: none;
        border-radius: 30px;
        padding: 5px;
        ${flexCenter}
        cursor: pointer;
        background: white;
        border: 1px solid ${color.light_gray2};
        &:hover{
          box-shadow: 0rem 0.2rem 0.2rem 0.1rem ${color.medium_gray};
          transition: box-shadow 0.3s;
        }
      }
    }
  
`;

const SearchMinimizeStyle = styled.div`
  width: 35rem;
  box-sizing: border-box;
  border-radius: 50px;
  background: white;
  display: ${(props) => (props.isfix ? `grid` : `none`)};
  grid-template-columns: 1fr 1.5fr 1fr 0.3fr;
  border: 1px solid ${color.medium_gray};
  box-shadow: 0rem 0.1rem 0.2rem 0.1rem ${color.light_gray2};
  cursor: pointer;
  padding: 1.2rem 1rem;
  position: relative;
  span {
    text-align: center;
    padding: 0.5rem 1rem;
    font-size: 1.4rem;
    font-weight: 450;
    border-right: 1px solid ${color.medium_gray};
    &:nth-child(3) {
      border: none;
    }
  }
  button {
    position: absolute;
    top: 50%;
    right: 0.7rem;
    transform: translate(0%, -50%);
    border: none;
    border-radius: 50%;
    padding: 0.8rem;
    background: ${color.Main};
  }
`;

const BecomehostStyle = styled.span`
  font-size: 14px;
  padding: 14px;
  border-radius: 25px;
  cursor: pointer;
  color: ${(props) => (props.isfix ? `${color.black}` : "white")};
  &:hover {
    background: ${(props) =>
      props.isfix ? `${color.light_gray}` : `${color.dark_gray2}`};
  }
`;

const LogoStyle = styled(Logo)`
  padding-top: 0.5rem;
  cursor: pointer;
  fill: ${(props) => (props.isfix ? `${color.Main}` : "white")};
  @media ${deviceSize.mobile} {
    display: none;
  }
`;

const GlobalStyle = styled(Global)`
  fill: ${(props) => (props.isfix ? `${color.black}` : "white")};
  padding: 13px;
  width: 16px;
  border-radius: 20px;
  margin-right: 7px;
  cursor: pointer;
  &:hover {
    background: ${(props) =>
      props.isfix ? `${color.light_gray}` : `${color.dark_gray2}`};
  }
`;

const HamburgerStyle = styled(Hamburger)`
  width: 18px;
  margin-right: 5px;
  padding: 7px;
`;

const ProfileStyle = styled(Profile)`
  width: 30px;
`;
