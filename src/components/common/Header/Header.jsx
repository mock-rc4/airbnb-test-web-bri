import React, { useCallback, useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { flexCenter, color } from "../styled";
import SearchBox from "./SearchBox";
import SettingPopup from "./SettingPopup";
import { ReactComponent as Logo } from "../../../svg/ic-logo.svg";
import { ReactComponent as Global } from "../../../svg/ic-global.svg";
import { ReactComponent as Hamburger } from "../../../svg/ic-hamburger.svg";
import { ReactComponent as Profile } from "../../../svg/ic-profile.svg";
import { ReactComponent as Search } from "../../../svg/ic-search.svg";

const Header = ({ isfix, widthper, position, boxshadow, minwidth }) => {
  //local state

  const [popupOpen, setPopupOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(isfix);
  const fixedRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    setSearchOpen(isfix);
  }, [isfix]);
  //function
  const handleClickPopup = useCallback(() => {
    setPopupOpen(!popupOpen);
  }, [popupOpen]);

  const handleGoMain = () => {
    navigate("/");
  };

  const handleClickMini = () => {
    setSearchOpen(false);
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
                <span>검색 시작하기</span>
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
        <SearchBox isfix={searchOpen} />
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
  width: 30rem;
  box-sizing: border-box;
  border-radius: 50px;
  background: white;
  display: ${(props) => (props.isfix ? `flex` : `none`)};
  border: 1px solid ${color.medium_gray};
  box-shadow: 0rem 0.1rem 0.2rem 0.1rem ${color.light_gray2};
  cursor: pointer;
  padding: 1.7rem 2rem;
  position: relative;

  span {
    font-size: 1.4rem;
    font-weight: 450;
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
