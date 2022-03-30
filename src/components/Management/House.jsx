import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { color } from "../common/styled";
import axios from "axios";

const House = ({
  country,
  houseIdx,
  city,
  gu,
  houseName,
  houseContent,
  bigType,
  smallType,
  addressIdx,
  houseGuest,
  houseBed,
  houseRoom,
  houseBath,
  housePrice,
  houseImg,
  checkIn,
  checkOut,
}) => {
  const [small, setSmall] = useState("");
  const [big, setBig] = useState("");
  const jwt = localStorage.getItem("jwt");
  const [nameText, setNameText] = useState(houseName);

  useEffect(() => {
    if (bigType === "A") setBig("아파트");
    if (bigType === "H") setBig("주택");
    if (bigType === "N") setBig("별채");

    if (smallType === "W") setSmall("숙소 전체");
    if (smallType === "P") setSmall("개인실");
    if (smallType === "S") setSmall("디인실");
  }, []);

  //삭제 api
  const handleDeleteHouse = async () => {
    //다시 렌더링
    try {
      const res = await axios({
        baseURL: "http://joon-serverlab.shop/",
        method: "patch",
        url: `app/houses/status/${houseIdx}`,
        headers: {
          "X-ACCESS-TOKEN": jwt,
        },
      });
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  };

  //숙소 이름 수정 api : nameText 에 저장
  const handleChangeHouseName = async () => {
    try {
      const res = await axios({
        baseURL: "http://joon-serverlab.shop/",
        method: "patch",
        url: `app/houses/house-name/${houseIdx}`,
        data: {
          text: nameText,
        },
      });
      if (res.data.isSuccess)
        alert(` ${nameText}로 숙소 이름이 변경되었습니다.`);
    } catch (e) {
      console.log(e);
    }
  };

  const handleInputName = (e) => {
    setNameText(e.target.value);
    console.log(nameText);
  };

  return (
    <WrapperStyle>
      <div className="house-section">
        <img src={houseImg} />
        <div className="house-info">
          <div className="info-first">
            <p className="type">
              {big}의 {small}•
            </p>
            <p className="address">
              {country} {city} {gu}
            </p>
          </div>
          <div className="house-name">
            <input
              type="text"
              defaultValue={nameText}
              onChange={handleInputName}
            />
            <button onClick={handleChangeHouseName}>수정</button>
          </div>
          <p className="condition">
            최대인원 {houseGuest}명 ・ 침대 {houseBed}개 ・ 방 {houseRoom}개 ・
            화장실 {houseBath}개
          </p>
          <p className="price"> 가격 : {housePrice}원 / 박</p>
          <p className="time">
            • 체크인 : {checkIn.slice(0, 5)}
            <br></br>• 체크아웃 : {checkOut.slice(0, 5)}{" "}
          </p>
        </div>
        <button className="delete" onClick={handleDeleteHouse}>
          숙소 삭제하기
        </button>
      </div>
    </WrapperStyle>
  );
};

export default House;

const WrapperStyle = styled.section`
  width: 65%;
  border: 1px solid ${color.medium_gray};
  border-radius: 1rem;
  padding: 2rem;
  margin: 2rem 0;

  .house-section {
    display: flex;
    position: relative;
    img {
      width: 30rem;
      height: 16rem;
      border-radius: 1rem;
      margin-right: 2rem;
    }
  }
  .house-info {
    .house-name {
      position: relative;
      input {
        font-size: 2.2rem;
        padding: 0.5rem 1rem;
        font-weight: 500;
        border: none;
        border-radius: 2rem;
        &:focus {
          outline: 1px solid ${color.medium_gray};
        }
      }
      button {
        position: absolute;
        right: -5rem;
        top: 50%;
        transform: translateY(-50%);
        background: white;
        border: 1px solid ${color.medium_gray};
        border-radius: 3rem;
        padding: 7px 10px;
        font-size: 1.4rem;
        cursor: pointer;
        &:hover {
          background: ${color.light_gray};
        }
      }
    }
  }

  .info-first {
    display: flex;
    line-height: 2rem;
  }
  .type {
    font-size: 1.4rem;
    font-weight: 500;
  }

  .address {
    font-size: 1.4rem;
    color: ${color.medium_gray2};
    text-decoration: underline;
  }

  .condition {
    font-size: 1.3rem;
    font-weight: 500;
    color: ${color.dark_gray};
    margin-top: 1rem;
  }

  .price {
    font-size: 1.4rem;
    padding: 1rem 0;

    font-weight: 600;
  }
  .time {
    line-height: 2rem;
    font-size: 1.4rem;
    font-weight: 600;
  }
  .delete {
    background: none;
    border: none;
    color: #ff0000;
    font-size: 1.4rem;
    font-weight: 600;
    text-decoration: underline;
    position: absolute;
    bottom: 1rem;
    right: 1rem;
    cursor: pointer;
  }
`;
