import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { addBigType } from "../../store/actions/addHosting";
import { useDispatch } from "react-redux";
import {
  flexCenter,
  hostingButton,
  color,
} from "../../components/common/styled";
import { useSelector } from "react-redux";
import LeftSection from "../../components/Hosting/LeftSection";
import DetailHeader from "../../components/Hosting/DetailHeader";
import DetailNav from "../../components/Hosting/DetailNav";

const PropertyTypePage = () => {
  //local state

  const [type, setType] = useState("");
  const dispatch = useDispatch();

  //function
  const handleClickType = (e) => {
    setType(e.target.value);
    dispatch(addBigType(e.target.value)); //리덕스에 bigType 저장
  };

  return (
    <WrapperStyle>
      <LeftSection title="호스팅할 숙소 유형을 알려주세요." />
      <div className="right-section">
        <DetailHeader isdark="false" />
        <div className="selection">
          <ButtonStyle
            value="A"
            onFocus={handleClickType}
            border={type == "A" ? "bold" : "light"}
          >
            아파트
            <img src="https://a0.muscache.com/im/pictures/eadbcbdb-d57d-44d9-9a76-665a7a4d1cd7.jpg?im_w=240" />
          </ButtonStyle>
          <ButtonStyle
            value="H"
            onFocus={handleClickType}
            border={type == "H" ? "bold" : "light"}
          >
            주택
            <img src="https://a0.muscache.com/im/pictures/d1af74db-58eb-46bf-b3f5-e42b6c9892db.jpg?im_w=240" />
          </ButtonStyle>

          <ButtonStyle
            value="N"
            onFocus={handleClickType}
            border={type == "N" ? "bold" : "light"}
          >
            별채
            <img src="https://a0.muscache.com/im/pictures/32897901-1870-4895-8e23-f08dc0e61750.jpg?im_w=240" />
          </ButtonStyle>
          <ButtonStyle>
            독특한 숙소
            <img src="https://a0.muscache.com/im/pictures/7ad56bb1-ed9f-4dcb-a14c-2523da331b44.jpg?im_w=240" />
          </ButtonStyle>
        </div>
        <DetailNav
          nextBtnAble={type}
          backPrev="/hosting"
          goNext="/hosting/privacy"
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
  box-sizing: border-box;
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
