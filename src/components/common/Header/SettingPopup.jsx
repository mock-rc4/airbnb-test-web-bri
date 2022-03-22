import React, { useCallback, useRef, useState } from "react";
import styled from "styled-components";
import AuthModal from "../../Auth/AuthModal";
import { color } from "../styled";

const SettingPopup = ({ handleClickPopup }) => {
  //global state
  //local state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const popupRef = useRef();
  //life cycle
  //funciton
  const handleClickAuth = useCallback(() => {
    setIsModalOpen(!isModalOpen);
  }, [isModalOpen]);

  return (
    <>
      {isModalOpen && <AuthModal handleClickAuth={handleClickAuth} />}
      <PopupBoxStyle>
        <ul className="isLogin-box">
          <li onClick={handleClickAuth}>회원 가입</li>
          <li onClick={handleClickAuth}>로그인</li>
          <li>숙소 호스트 되기</li>
          <li>체험 호스팅하기</li>
          <li>도움말</li>
        </ul>
      </PopupBoxStyle>
    </>
  );
};

export default SettingPopup;

const PopupBoxStyle = styled.div`
  // 반응형으로 크기가 줄어들지 않는 부분은 Px 로 지정함.
  width: 230px;
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
    li:nth-child(1) {
      color: ${color.black};
      font-weight: 500;
    }
    li:nth-child(2) {
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
