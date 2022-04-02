import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { addSmallType } from "../../store/actions/addHosting";
import { useDispatch } from "react-redux";
import {
  flexCenter,
  hostingButton,
  color,
} from "../../components/common/styled";
import { useSelector } from "react-redux";
import DetailHeader from "../../components/Hosting/DetailHeader";
import DetailNav from "../../components/Hosting/DetailNav";
import LeftSection from "../../components/Hosting/LeftSection";

const PropertyTypePage = () => {
  //local state

  const [type, setType] = useState("");
  const dispatch = useDispatch();

  //function
  const handleClickType = (e) => {
    setType(e.target.value);
    dispatch(addSmallType(e.target.value)); //리덕스에 smallType 저장
  };

  return (
    <WrapperStyle>
      <LeftSection title="게스트가 머무르게 될 숙소의 종류가 무엇인가요?" />
      <div className="right-section">
        <DetailHeader isdark="false" />
        <div className="selection">
          <ButtonStyle
            value="W"
            onFocus={handleClickType}
            border={type == "W" ? "bold" : "light"}
          >
            공간 전체
          </ButtonStyle>
          <ButtonStyle
            value="P"
            onFocus={handleClickType}
            border={type == "P" ? "bold" : "light"}
          >
            개인실
          </ButtonStyle>
          <ButtonStyle
            value="S"
            onFocus={handleClickType}
            border={type == "S" ? "bold" : "light"}
          >
            다인실
          </ButtonStyle>
        </div>
        <DetailNav
          nextBtnAble={type}
          backPrev="/hosting/property"
          goNext="/hosting/address"
        />
      </div>
    </WrapperStyle>
  );
};

export default PropertyTypePage;

const WrapperStyle = styled.main`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr;

  & > div {
    width: 100%;
    position: relative;
  }

  .selection {
    width: 100%;
    ${flexCenter}
    flex-direction: column;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const ButtonStyle = styled.button`
  ${hostingButton};
  background: ${(props) =>
    props.border === "bold" ? `${color.light_gray}` : "none"};
  outline: ${(props) =>
    props.border === "bold" ? `1.5px solid black` : "none"};
`;
