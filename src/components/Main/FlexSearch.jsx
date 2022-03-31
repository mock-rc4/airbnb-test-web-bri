import React from "react";
import styled from "styled-components";
import { color, deviceSize, flexCenter } from "../common/styled";

const FlexSearch = () => {
  return (
    <BoxStyle>
      <div className="flexsearch-box">
        <img src="https://a0.muscache.com/im/pictures/a2704500-b282-4411-a2fb-d7f80c4c72a8.jpg?im_q=highq&im_w=1920" />
        <div className="flexsearch-text">
          <p>호기심을 자극하는 숙소로 떠나보세요</p>
          <button>
            <span>유연한 검색</span>
          </button>
        </div>
      </div>
    </BoxStyle>
  );
};

export default FlexSearch;

const BoxStyle = styled.section`
  width: 100%;
  background: linear-gradient(${color.black} 50%, white 50%);
  ${flexCenter}

  .flexsearch-box {
    width: 90%;
    position: relative;

    img {
      width: 100%;
      border-radius: 1rem;
    }
    .flexsearch-text {
      width: 100%;
      position: absolute;
      bottom: 8rem;
      ${flexCenter}
      flex-direction: column;
      p {
        color: white;
        font-size: 4.5rem;
        font-weight: 450;
        margin-bottom: 2rem;
        padding: 0 6rem;
        word-break: keep-all;
        @media ${deviceSize.tablet} {
          text-align: center;
          font-size: 3.6rem;
        }
      }
      button {
        background: white;
        border: none;
        border-radius: 3rem;
        padding: 1.7rem 3.2rem;
        span {
          font-size: 1.8rem;
          background-image: linear-gradient(
            to right,
            rgb(111, 1, 156) 0%,
            rgb(198, 1, 126) 135.12%
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-weight: 900;
        }

        &:hover {
          background: ${color.medium_gray};
        }
      }
    }
  }
`;
