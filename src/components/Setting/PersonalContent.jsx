import React, { useState } from "react";
import styled from "styled-components";
import { color, flexCenter, authInput } from "../../components/common/styled";
import { ReactComponent as Lock } from "../../svg/ic-lock.svg";
import { ReactComponent as Eye } from "../../svg/ic-eye.svg";
import PersonalChange from "./PersonalChange";

const PersonalContent = () => {
  return (
    <WrapperStyle>
      <PersonalChange />

      <section className="info">
        <div className="info-box">
          <div className="info-box-section">
            <Lock />
            <h3>수정할 수 있는 세부 정보는 무엇인가요?</h3>
            <p>
              에어비앤비에서 본인 인증 시 사용하는 세부 정보는 변경할 수
              없습니다. 연락처 정보와 일부 개인정보는 수정할 수 있지만, 다음번
              예약 또는 숙소를 등록할 때 본인 인증 절차를 거쳐야 할 수도
              있습니다.
            </p>
          </div>
          <div className="just-line">ss</div>
          <div className="info-box-section">
            <Eye />
            <h3>다른 사람에게 어떤 정보가 공개되나요?</h3>
            <p>
              에어비앤비는 예약이 확정된 후에만 호스트 및 게스트의 연락처 정보를
              공개합니다.
            </p>
          </div>
        </div>
      </section>
    </WrapperStyle>
  );
};
export default PersonalContent;

const WrapperStyle = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  width: 100%;

  .info {
    width: 100%;
    display: flex;
    justify-content: flex-end;

    .just-line {
      width: 85%;
      color: white;
      border-bottom: 1px solid ${color.medium_gray};
      margin: 0 2rem;
    }
  }
  .info-box {
    width: 80%;
    border: 1px solid ${color.medium_gray};
    border-radius: 1rem;
  }
  .info-box-section {
    width: 100%;
    box-sizing: border-box;
    padding: 2rem;

    & > h3 {
      font-size: 2rem;
      font-weight: 700;
      color: ${color.dark_gray};
      padding: 1.5rem 0;
      line-height: 3rem;
      word-break: keep-all;
    }
    & > p {
      font-size: 1.6rem;
      color: ${color.medium_gray2};
      line-height: 2.3rem;
      word-break: keep-all;
    }
  }
`;
