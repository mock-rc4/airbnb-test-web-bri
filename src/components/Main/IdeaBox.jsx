import React, { useEffect } from "react";
import styled from "styled-components";

const IdeaBox = ({ location, distance, image, background }) => {
  //전역 state
  //local state
  //Life Cycle 선언

  //함수 선언
  return (
    <>
      <BoxStyle>
        <img src={image} alt={location} />
        <LocationTextStyle background={background}>
          <div className="location-text">
            <h3>{location}</h3>
            <p>{distance}km 거리</p>
          </div>
        </LocationTextStyle>
      </BoxStyle>
    </>
  );
};

export default IdeaBox;
const BoxStyle = styled.section`
  box-sizing: border-box;
  border-radius: 1rem;
  overflow: hidden;
  img {
    width: 100%;
    margin-bottom: -2px;
  }
`;

const LocationTextStyle = styled.div`
  background: ${(props) => props.background};
  position: relative;
  width: 100%;

  &:after {
    content: "";
    display: block;
    padding-bottom: 65%;
  }

  .location-text {
    position: absolute;
    top: 2.5rem;
    left: 2rem;
    h3 {
      font-size: 2.7rem;
      font-weight: 400;
      color: white;
      margin-bottom: 1rem;
    }
    p {
      font-size: 1.5rem;
      color: white;
    }
  }
`;
