import styled from "styled-components";
import { css } from "styled-components";

export const PageWrap = css`
  width: 100vw;
  height: 100vh;
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
  medium_gray: "#dfdfdf",
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
