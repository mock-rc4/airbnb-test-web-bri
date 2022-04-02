import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { color } from "../common/styled";
import House from "./House";

const HouseManage = () => {
  const [houses, setHouses] = useState([]);
  const [num, setNum] = useState(0);
  const hostIdx = useSelector((state) => state.loginReducer);

  useEffect(() => {
    houseInformationApi();
    houseNumApi();
  }, []);

  const houseInformationApi = async () => {
    try {
      const res = await axios({
        baseURL: "http://joon-serverlab.shop/",
        method: "get",
        url: `app/houses/by-host/${hostIdx.userIdx}`,
        params: { hostIdx: hostIdx.userIdx },
      });
      setHouses(res.data.result);
    } catch (e) {
      console.log(e);
    }
  };

  const houseNumApi = async () => {
    try {
      const res = await axios({
        baseURL: "http://joon-serverlab.shop/",
        method: "get",
        url: `app/houses/count-houses?userIdx=${hostIdx.userIdx}`,
      });
      setNum(res.data.result);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <WrapperStyle>
      <h2>숙소 관리</h2>
      <p>총 {num}개의 관리하는 숙소가 있습니다.</p>
      {houses ? (
        houses.map((item, index) => (
          <House
            key={index}
            houseIdx={item.houseIdx}
            country={item.country}
            city={item.city}
            gu={item.gu}
            houseName={item.houseName}
            houseContent={item.houseContent}
            bigType={item.bigType}
            smallType={item.smallType}
            addressIdx={item.addressIdx}
            houseGuest={item.houseGuest}
            houseBed={item.houseBed}
            houseRoom={item.houseRoom}
            houseBath={item.houseBath}
            housePrice={item.housePrice}
            houseImg={item.houseImg}
            checkIn={item.checkIn}
            checkOut={item.checkOut}
          />
        ))
      ) : (
        <div>없아</div>
      )}
    </WrapperStyle>
  );
};

export default HouseManage;

const WrapperStyle = styled.section`
  width: 70%;

  padding: 5rem 0;
  h2 {
    font-size: 2.4rem;
    font-weight: 600;
  }
  & > p {
    padding: 1rem 0;
    font-size: 1.6rem;
    color: ${color.dark_gray};
  }
`;
