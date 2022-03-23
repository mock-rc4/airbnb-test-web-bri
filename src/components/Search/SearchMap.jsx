import React, { useCallback, useEffect, useRef } from "react";
import styled from "styled-components";

const SearchMap = () => {
  const mapRef = useRef(null);

  const initMap = useCallback(() => {
    new window.google.maps.Map(mapRef.current, {
      center: {
        lat: -34.397,
        lng: 150.644,
      },
      zoom: 8,
    });
  }, [mapRef]);

  useEffect(() => {
    initMap();
  }, [initMap]);

  return (
    <>
      <WrapStyle>
        <div className="map" ref={mapRef}></div>
      </WrapStyle>
    </>
  );
};

export default SearchMap;

const WrapStyle = styled.section`
  width: 100%;
  .map {
    width: 100%;
    height: 76vh;
  }
`;
