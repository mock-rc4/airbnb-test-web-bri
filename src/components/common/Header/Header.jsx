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

const Header = ({ isFix, widthper }) => {
  //local state
  const [popupOpen, setPopupOpen] = useState(false);
  const fixedRef = useRef();
  const navigate = useNavigate();

  //function
  const handleClickPopup = useCallback(() => {
    setPopupOpen(!popupOpen);
  }, [popupOpen]);

  const handleGoMain = () => {
    navigate("/");
  };

  return (
    <>
      <BoxStyle ref={fixedRef} isFix={isFix}>
        <HeadSectionStyle widthper={widthper}>
          {popupOpen && (
            <SettingPopup
              popupOpen={popupOpen}
              handleClickPopup={handleClickPopup}
            />
          )}
          <nav>
            <LogoStyle isFix={isFix} onClick={handleGoMain} />

            <div className="header-middle">
              <SearchMinimizeStyle isFix={isFix}>
                <span>검색 시작하기</span>
                <button className="search-button">
                  <Search />
                </button>
              </SearchMinimizeStyle>
            </div>

            <div className="header-right">
              <BecomehostStyle isFix={isFix}>호스트 되기</BecomehostStyle>
              <GlobalStyle isFix={isFix} />
              <button onClick={handleClickPopup}>
                <HamburgerStyle />
                <ProfileStyle />
              </button>
            </div>
          </nav>
        </HeadSectionStyle>
        <div className="search-container">
          <SearchBox isFix={isFix} />
        </div>
      </BoxStyle>
    </>
  );
};

export default Header;

const BoxStyle = styled.header`
  z-index: 3;
  width: 100%;
  ${flexCenter}
  background: ${(props) => (props.isFix ? "white" : `${color.black}`)};
  z-index: 2;
  position: sticky;
  top: 0;
`;

const HeadSectionStyle = styled.div`
  width: ${(props) => props.widthper};
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
  //opacity: ${(props) => (props.isFix ? `1` : `0`)};
  display: ${(props) => (props.isFix ? `block` : `none`)};
  border: 1px solid ${color.medium_gray};
  box-shadow: 0rem 0.1rem 0.2rem 0.1rem ${color.light_gray2};
  cursor: pointer;
  position: relative;
  padding: 1.7rem 2rem;

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
  color: ${(props) => (props.isFix ? `${color.black}` : "white")};
  &:hover {
    background: ${(props) =>
      props.isFix ? `${color.light_gray}` : `${color.dark_gray2}`};
  }
`;

const LogoStyle = styled(Logo)`
  width: 100px;
  height: fit-content;
  padding-top: 0.5rem;
  cursor: pointer;
  fill: ${(props) => (props.isFix ? `${color.Main}` : "white")};
`;

const GlobalStyle = styled(Global)`
  fill: ${(props) => (props.isFix ? `${color.black}` : "white")};
  padding: 13px;
  width: 16px;
  border-radius: 20px;
  margin-right: 7px;
  cursor: pointer;
  &:hover {
    background: ${(props) =>
      props.isFix ? `${color.light_gray}` : `${color.dark_gray2}`};
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
