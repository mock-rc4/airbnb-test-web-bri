import React from "react";
import styled from "styled-components";
import { color } from "../common/styled";

const SettingBox = ({ title, content }) => {
  return (
    <WrapperStyle>
      <p className="title-text">{title}</p>
      <p className="content-text">{content}</p>
    </WrapperStyle>
  );
};
export default SettingBox;

const WrapperStyle = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 1rem;
  box-shadow: 1px 5px 10px 5px ${color.light_gray2};
  padding: 1.6rem;

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
