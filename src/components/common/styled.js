import styled from "styled-components";

export const PageWrap = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const flexCenter = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const color = {
  Main: "##eb4c60",
  black: "#3d3d3d",
  white: "#FFFFFF",
};

export const size = {
  mobile: "425px",
  tablet: "768px",
  desktop: "1440px",
};

export const device = {
  mobile: `@media only screen and (max-width: ${size.mobile})`,
  tablet: `@media only screen and (max-width: ${size.tablet})`,
  desktop: `@media only screen and (max-width: ${size.desktop})`,
};
