import React from "react";
import styled from "styled-components";
import { color } from "../common/styled";
import { ReactComponent as Global } from "../../svg/ic-global.svg";
import { useNavigate } from "react-router";
const SettingBox = ({ title, content }) => {
  //local state
  const navigate = useNavigate();

  //function
  const handleClickNavigator = (e) => {
    if (title === "개인정보") navigate("/setting/personal");
    if (title === "로그인 및 보안") navigate("/setting/security");
  };

  return (
    <WrapperStyle onClick={handleClickNavigator}>
      <Global />
      <div className="text">
        <p className="title-text">{title}</p>
        <p className="content-text">{content}</p>
      </div>
    </WrapperStyle>
  );
};
export default SettingBox;

const WrapperStyle = styled.div`
  width: 100%;
  height: 15rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 1rem;
  box-shadow: 1px 5px 10px 5px ${color.light_gray2};
  padding: 1.6rem;
  cursor: pointer;

  .title-text {
    font-size: 1.6rem;
    padding-bottom: 1.5rem;
    font-weight: 500;
  }
  .content-text {
    font-size: 1.4rem;
    color: ${color.medium_gray2};
    line-height: 1.8rem;
  }
`;
