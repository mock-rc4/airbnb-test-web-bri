import React, { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { inputUserIndex, isLogin } from "../../../store/actions/login";
import AuthModal from "../../Auth/AuthModal";
import Signup from "../../Auth/Signup";
import { color } from "../styled";

const SettingPopup = ({ handleClickPopup }) => {
  //navigator
  const navigate = useNavigate();

  //redux use
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.loginReducer);
  console.log(selector.loginState);

  //local state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const popupRef = useRef();

  //life cycle

  //funciton
  const handleClickAuth = useCallback(() => {
    setIsModalOpen(!isModalOpen);
  }, [isModalOpen]);

  //로그아웃 funciton
  const handleClickLogOut = () => {
    dispatch(isLogin(false));
    dispatch(inputUserIndex(""));
    localStorage.removeItem("jwt");
    handleClickPopup();
  };

  return (
    <>
      {isModalOpen && <AuthModal handleClickAuth={handleClickAuth} />}
      {/* {isModalOpen && <Signup handleClickAuth={handleClickAuth} />} */}
      <PopupBoxStyle>
        {selector.loginState ? (
          <ul className="isLogin-box">
            <li className="bold-text">메세지</li>
            <li className="bold-text">알림</li>
            <li className="bold-text">여행</li>
            <li className="bold-line-text">위시리스트</li>
            <li>숙소관리</li>
            <li onClick={() => navigate("/hosting")}>숙소 호스팅하기</li>
            <li onClick={() => navigate("/setting")} className="bottom-line">
              계정
            </li>
            <li>도움말</li>
            <li onClick={handleClickLogOut}>로그아웃</li>
          </ul>
        ) : (
          <ul className="isLogin-box">
            <li onClick={handleClickAuth} className="bold-text">
              회원 가입
            </li>
            <li onClick={handleClickAuth} className="bottom-line">
              로그인
            </li>
            <li>숙소 호스트 되기</li>
            <li>체험 호스팅하기</li>
            <li>도움말</li>
          </ul>
        )}
      </PopupBoxStyle>
    </>
  );
};

export default SettingPopup;

const PopupBoxStyle = styled.div`
  width: 23rem;
  height: fit-content;
  border-radius: 1rem;
  overflow: hidden;
  position: absolute;
  right: 0;
  top: 70px;
  background: white;
  z-index: 5;
  box-shadow: 0rem 0rem 0.2rem 0.2rem rgba(9, 9, 9, 0.1);
  ul {
    overflow: hidden;
    li {
      cursor: pointer;
      width: 100%;
      font-size: 14px;
      padding: 1.5rem;
      box-sizing: border-box;
      color: ${color.dark_gray};
    }

    .bold-text {
      color: ${color.black};
      font-weight: 600;
    }
    .bottom-line {
      border-bottom: 1px solid ${color.medium_gray};
    }
    .bold-line-text {
      color: ${color.black};
      font-weight: 600;
      border-bottom: 1px solid ${color.medium_gray};
    }
    li:hover {
      background: ${color.light_gray};
    }
  }
`;

const BackStyle = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
`;
