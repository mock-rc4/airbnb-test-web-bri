import styled from "styled-components";
import { css } from "styled-components";

export const PageWrap = css`
  width: 100vw;
  height: 100vh;
`;

export const check = css`
  border: 1px solid red;
`;

export const flexCenter = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const color = {
  Main: "#f53a57",
  black: "#151515",
  white: "#FFFFFF",
  light_gray: "#f5f5f5",
  light_gray2: "#eeeeee",
  dark_gray: "#555555",
  dark_gray2: "#333333",
  medium_gray: "#dddddd",
  medium_gray2: "#8c8c8c",
  input_gray: "#aaaaaa",
  red: "#ff0000",
};

export const size = {
  mobile: "425px",
  tablet: "768px",
  desktop: "1440px",
};

export const mainTitle = css`
  font-size: 3.3rem;
  font-weight: 530;
  padding-bottom: 4.8rem;
`;

export const device = {
  mobile: `@media only screen and (max-width: ${size.mobile})`,
  tablet: `@media only screen and (max-width: ${size.tablet})`,
  desktop: `@media only screen and (max-width: ${size.desktop})`,
};

export const authButton = css`
  width: 100%;
  border: none;
  border-radius: 10px;
  color: white;
  padding: 15px;
  margin: 15px 0;
  font-size: 16px;
  cursor: pointer;
  background: linear-gradient(
    to right,
    rgb(230, 1, 60) 0%,
    rgb(220, 1, 126) 100%
  );
`;

export const authInput = css`
  width: 100%;
  box-sizing: border-box;
  font-size: 16px;
  padding: 2.5rem 1.2rem 1.1rem 1.2rem;
  border: 1px solid ${color.input_gray};
  border-radius: 9px;
  &:focus {
    outline: 1.5px solid ${color.black};
  }
`;

export const detailButton = css`
  font-size: 1.6rem;
  font-weight: 500;
  background: white;
  border: 1px solid ${color.dark_gray2};
  border-radius: 1rem;
  padding: 1.2rem 2rem;
  margin-top: 4rem;
  &:hover {
    background: ${color.light_gray};
    text-decoration: underline;
  }
  &:active {
    transform: scale(0.95);
    transition: transform 0.1s ease;
  }
`;

export const hostingButton = css`
  width: 70%;
  height: 9rem;
  border: 1px solid ${color.medium_gray};
  border-radius: 1rem;
  background: white;
  font-size: 1.8rem;
  font-weight: 500;
  text-align: start;
  margin: 1rem 0;
  padding-right: 1.5rem;
  padding-left: 2.5rem;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  img {
    width: 5.5rem;
    border-radius: 0.5rem;
  }
  &:hover {
    outline: 1.5px solid ${color.black};
  }
`;

// 반응형 기준

export const deviceSize = {
  mobile: "screen and (max-width:768px)",
  tablet: "screen and (max-width: 1050px)",
};
// mobile: "screen and (max-width: 500px)";
// tablet: "screen and (max-width: 768px)";
// element: "screen and (max-width: 1050px)";
