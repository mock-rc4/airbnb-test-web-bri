import React from "react";
import styled from "styled-components";
import { color, flexCenter } from "../common/styled";
import BoxInfo from "./BoxInfo";
import BoxPrice from "./BoxPrice";
import { ReactComponent as Report } from "../../svg/ic-report.svg";

const ReservationBox = () => {
  return (
    <BoxStyle>
      <div>
        {/* 여기 부분에 title 넣고? 바뀌니까 */}
        <BoxInfo />
        {/* 이 가운데 버튼 넣고 하는게 나을수도 */}
        <BoxPrice infotext={true} />
      </div>
      <button className="report">
        <Report />
        <span>숙소 신고하기</span>
      </button>
    </BoxStyle>
  );
};

export default ReservationBox;

const BoxStyle = styled.div`
  width: 100%;
  height: auto;
  border: 1px solid ${color.medium_gray};
  padding: 2.4rem;
  border-radius: 1rem;
  box-sizing: border-box;
  box-shadow: 0px 5px 15px 5px ${color.medium_gray};
  position: sticky;
  top: 13rem;
  right: 0;

  & > div {
    width: 100%;
    height: 100%;
  }

  .report {
    ${flexCenter};
    position: absolute;
    bottom: -5rem;
    left: 50%;
    transform: translateX(-50%);
    border: none;
    background: white;
    color: ${color.dark_gray};
    font-size: 1.4rem;
    font-weight: 420;
    text-decoration: underline;
    cursor: pointer;
    span {
      padding-left: 1rem;
    }
  }
`;
