import React from "react";
import styled from "styled-components";
import { flexCenter, color } from "../common/styled";

const AboutHosting = () => {
  return (
    <>
      <BoxStyle>
        <img src="/img/aboutHostingImage.jpg" />
        <div className="text-box">
          <span>
            호스팅에 관해<br></br>궁금하신 점이<br></br>있나요?
          </span>
          <button>슈퍼호스트에게 물어보세요</button>
        </div>
      </BoxStyle>
    </>
  );
};

export default AboutHosting;

const BoxStyle = styled.section`
  width: 100%;
  position: relative;
  ${flexCenter}
  img {
    width: 100%;
  }

  .text-box {
    width: 90%;
    height: 100%;
    position: absolute;
    top: 0;
    padding: 8rem 0;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    span {
      color: white;
      font-size: 7.4rem;
      font-weight: 600;
      line-height: 81px;
    }

    button {
      color: ${color.black};
      width: 21.5rem;
      background: white;
      font-size: 1.6rem;
      font-weight: 500;
      cursor: pointer;
      border: none;
      border-radius: 0.8rem;
      padding: 1.4rem 0;
      &:hover {
        background: ${color.medium_gray};
      }
    }
  }
`;
