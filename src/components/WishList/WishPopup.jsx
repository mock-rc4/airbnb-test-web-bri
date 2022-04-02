import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { color, detailButton, flexCenter } from "../common/styled";
import axios from "axios";
import { useSelector } from "react-redux";

const WishPopup = ({
  handleClosePop,
  houseName,
  houseIdx,
  houseImg,
  houseGuest,
  houseBed,
  houseRoom,
  houseBath,
}) => {
  const userInfo = useSelector((state) => state.loginReducer);

  const handleClickStore = async () => {
    try {
      const res = await axios({
        method: "post",
        url: `app/wish-list/add/${houseIdx}`,
        baseURL: "http://joon-serverlab.shop/",
        data: {
          userIdx: userInfo.userIdx,
        },
      });
      console.log(res);
      if (res.data.isSuccess) handleClosePop();
      if (res.data.code === 2164) alert("이미 위시리스트에 추가된 숙소입니다.");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <WishModalStyle>
        <div className="wish-modal">
          <div className="title">
            <h1>위시리스트</h1>
            <p onClick={handleClosePop}>✕</p>
          </div>
          <div className="content">
            <div className="make-wish">
              <img src="https://a0.muscache.com/im/pictures/da1a2f06-efb0-4079-abce-0f6fc82089e0.jpg" />
              <p>새로운 위시리스트 만들기</p>
            </div>
            <div className="make-wish">
              <img src={houseImg} />
              <div className="text">
                <p>{houseName}</p>
                <p className="room-info">
                  최대 인원 {houseGuest}명 ・ 침실 {houseRoom}개 ・ 침대{" "}
                  {houseBed}개 ・ 욕실 {houseBath}개
                </p>
              </div>
            </div>
            <button onClick={handleClickStore}>저장하기</button>
          </div>
        </div>
        <div
          className="back"
          onClick={(e) => {
            e.preventDefault();
            if (handleClosePop) handleClosePop();
          }}
        ></div>
      </WishModalStyle>
    </>
  );
};

export default WishPopup;

const WishModalStyle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1000;
  ${flexCenter}
  .wish-modal {
    position: absolute;
    width: 568px;
    background: white;
    border-radius: 1.5rem;
    box-sizing: border-box;
    z-index: 10;

    // 애니메이션
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(20rem);
      }
      to {
        opacity: 1;
      }
    }
    animation: fadeInUp 0.3s;
    .title {
      position: relative;
      h1 {
        width: 100%;
        font-size: 1.6rem;
        font-weight: 700;
        padding: 2rem 0;
        text-align: center;
        border-bottom: 1px solid ${color.medium_gray};
      }
      p {
        font-size: 1.5rem;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: 1rem;
        cursor: pointer;
        padding: 1rem;
        border-radius: 50%;
        &:hover {
          background: ${color.light_gray};
        }
      }
    }
  }
  .content {
    padding: 2rem;
    padding-top: 1rem;
    ${flexCenter}
    flex-direction:column;
    & > div {
      padding: 1rem 0;
    }
    button {
      padding: 1.5rem 2rem;
      font-size: 1.6rem;
      border-radius: 1rem;
      background: #dd0055;
      color: white;
      border: none;
      margin-top: 1rem;
      &:active {
        background: ${color.Main};
        transform: scale(0.95);
        transition: transform 0.1s ease;
      }
    }
  }
  .back {
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: 7;
  }

  .make-wish {
    width: 100%;
    display: flex;
    align-items: center;
    img {
      width: 6rem;
      height: 6rem;
      border-radius: 0.8rem;
      margin-right: 1.5rem;
    }
    p {
      font-size: 1.6rem;
      font-weight: 500;
    }
    .room-info {
      font-size: 1.4rem;
      margin-top: 0.5rem;
      color: ${color.medium_gray2};
    }
  }
`;
