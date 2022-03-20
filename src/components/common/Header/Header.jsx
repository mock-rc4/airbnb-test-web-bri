import React, { useCallback, useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { flexCenter, color } from "../styled";
import SearchBox from "./SearchBox";
import SettingPopup from "./SettingPopup";

const Header = () => {
  //local state
  const [popupOpen, setPopupOpen] = useState(false);
  const [scrollY, setScrollY] = useState(window.scrollY);
  const [isFix, setIsFix] = useState(false);
  const fixedRef = useRef();
  const searchBarRef = useRef();

  //life cycle
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollY]);

  //function
  const handleClickPopup = useCallback(() => {
    setPopupOpen(!popupOpen);
  }, [popupOpen]);

  //스크롤 관여 함수
  const handleScroll = () => {
    setScrollY(window.scrollY);
    if (scrollY > 30) {
      setIsFix(true);
      searchBarRef.current.style.display = "none";
    } else {
      setIsFix(false);
      searchBarRef.current.style.display = "block";
    }
  };

  return (
    <>
      <BoxStyle ref={fixedRef} isFix={isFix}>
        <div className="header-section">
          {popupOpen && <SettingPopup handleClickPopup={handleClickPopup} />}
          <nav>
            <LogoStyle src="/image/ic-logo-white.svg" isFix={isFix} />
            <ul>
              <li>숙소</li>
              <li>체험</li>
              <li>온라인 체험</li>
            </ul>
            <div>
              <BecomehostStyle isFix={isFix}>호스트 되기</BecomehostStyle>
              <GlobalimgStyle src="/image/ic-global-white.svg" />
              <button onClick={handleClickPopup}>
                <img src="/image/ic-hamburger.svg" />
                <img src="/image/ic-profile.svg" />
              </button>
            </div>
          </nav>
          <div className="search" ref={searchBarRef}>
            <SearchBox />
          </div>
        </div>
      </BoxStyle>
    </>
  );
};

export default Header;

const BoxStyle = styled.section`
  width: 100%;
  ${flexCenter}
  background: ${(props) => (props.isFix ? "white" : `${color.black}`)};
  z-index: 3;
  position: fixed;
  top: 0;
  .header-section {
    width: 90%;
    ${flexCenter}
    flex-direction: column;
    position: relative;
    nav {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      padding: 1rem 0;
      width: 100%;

      ul {
        ${flexCenter}
        color: white;
        display: flex;
        font-size: 16px;
        box-sizing: border-box;
        li {
          padding: 2rem;
        }
      }

      div {
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
          img:nth-child(1) {
            width: 18px;
            margin-right: 5px;
            padding: 7px;
          }
          img:nth-child(2) {
            width: 30px;
          }
        }
      }
    }
  }
`;

const LogoStyle = styled.img`
  padding: 1em 0;
  ${flexCenter}
  width: 100px;
  & {
    fill: red;
  }
  // color: ${(props) => props.isFix};
`;

const BecomehostStyle = styled.span`
  font-size: 14px;
  padding: 14px;
  border-radius: 25px;
  cursor: pointer;
  color: ${(props) => (props.isFix ? `${color.black}` : "white")};
  &:hover {
    background: ${color.dark_gray2};
  }
`;

const GlobalimgStyle = styled.img`
  padding: 13px;
  width: 16px;
  border-radius: 20px;
  margin-right: 7px;
  cursor: pointer;
  &:hover {
    background: ${color.dark_gray2};
  }
`;
