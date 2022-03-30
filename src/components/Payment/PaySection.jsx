import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { color, flexCenter } from "../common/styled";
import { ReactComponent as Calender } from "../../svg/ic-cal.svg";
import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

const PaySection = () => {
  const navigate = useNavigate();
  //예약 api 사용하는 곳
  //redux
  const houseInfo = useSelector((state) => state.storeHouseIdxReducer);
  const userInfo = useSelector((state) => state.loginReducer);
  const tripInfo = useSelector((state) => state.searchHouseReducer);

  const handleClickReservation = async () => {
    try {
      const res = await axios({
        baseURL: "http://joon-serverlab.shop/",
        method: "post",
        url: `app/reserve`,
        data: {
          houseIdx: houseInfo.houseIdx,
          guestIdx: userInfo.userIdx,
          startDate: tripInfo.checkin,
          endDate: tripInfo.checkout,
        },
      });
      console.log(res);
      if (res.data.isSuccess) navigate("/reservation");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <WrapperStyle>
        <section className="reservation-info">
          <h2>예약 정보</h2>
          <div>
            <div className="reser-info-box">
              <span>날짜</span>
              <button>수정</button>
            </div>
            <p>
              {tripInfo.checkin && tripInfo.checkout
                ? `${tripInfo.checkin.slice(5, 7)}월 ${tripInfo.checkin.slice(
                    8,
                    10
                  )}일 ~ ${tripInfo.checkout.slice(
                    5,
                    7
                  )}일 ${tripInfo.checkout.slice(8, 10)}일`
                : "날짜가 지정되지 않음"}
            </p>
          </div>
          <div>
            <div className="reser-info-box">
              <span>게스트</span>
              <button>수정</button>
            </div>
            <p>
              {tripInfo.people
                ? `게스트 ${tripInfo.people}명`
                : "인원이 지정되지 않음"}
            </p>
          </div>
        </section>
        <section className="payment">
          <h2>결제 수단</h2>
          <input type="text" placeholder="신용카드 또는 체크카드" />
          <input className="card-num" type="text" placeholder="카드 번호" />
          <input className="cvv" type="text" placeholder="만료일 및 CVV" />
          <input type="text" placeholder="우편번호" />
          <input type="text" defaultValue="한국" />
        </section>

        <section className="essential">
          <h2>필수 입력 정보</h2>
          <p>
            호스트에게 메시지 보내기<br></br>
            <span>호스트에게 여행 목적과 도착 예정 시간을 알려주세요.</span>
          </p>
          <p>
            전화번호<br></br>
            <span>
              여행 업데이트를 받으려면 전화번호를 입력하고 인증해주세요.
            </span>
          </p>
        </section>
        <section className="policy">
          <h2>환불 정책</h2>
          <p>
            4월 13일 오후 12:00 전에 예약을 취소하면 총 숙박 요금의 50% 및
            서비스 수수료 전액이 환불됩니다.
            <span>자세히 알아보기</span>
          </p>
          <p>
            코로나19로 인한 여행 문제에는 정상참작이 가능한 상황 정책이 적용되지
            않습니다.
            <span>자세히 알아보기</span>
          </p>
        </section>
        <section className="dontpay">
          <Calender />
          <p>
            호스트가 24시간 이내 예약 요청을 수락하기 전까지는 예약이 아직
            확정된 것이 아닙니다.<br></br>
            <span>예약 확정 전까지는 요금이 청구되지 않습니다.</span>
          </p>
        </section>
        <p>
          아래 버튼을 선택함으로써, 호스트가 설정한 숙소 이용규칙, 에어비앤비
          코로나19 방역 수칙 및 게스트 환불 정책에 동의합니다. 호스트가 예약
          요청을 수락하면 표시된 총액이 결제되는 데 동의합니다.
        </p>
        <button onClick={handleClickReservation}>예약 요청</button>
      </WrapperStyle>
    </>
  );
};

export default PaySection;

const WrapperStyle = styled.div`
  width: 100%;
  section {
    line-height: 2.2rem;
    padding: 2.5rem 0;
    border-bottom: 1px solid ${color.medium_gray};
    h2 {
      font-size: 2.2rem;
      font-weight: 500;
    }
  }
  .reservation-info {
    font-size: 1.6rem;
    p {
      color: ${color.dark_gray2};
      margin-top: 0.5rem;
    }
  }
  .reser-info-box {
    display: flex;
    align-items: end;
    justify-content: space-between;
    span {
      color: ${color.black};
      margin-top: 2rem;
      font-weight: 550;
    }
    button {
      font-size: 1.6rem;
      background: white;
      border: none;
      text-decoration: underline;
      color: ${color.dark_gray2};
      font-weight: 600;
      cursor: pointer;
    }
  }
  .essential {
    p {
      padding-top: 2.5rem;
      font-size: 1.6rem;
      span {
        font-size: 1.4rem;
        color: ${color.dark_gray};
      }
    }
  }
  .payment {
    h2 {
      margin-bottom: 2rem;
    }
    & > input {
      width: 100%;
      box-sizing: border-box;
      border: 1px solid ${color.medium_gray2};
      border-radius: 1rem;
      padding: 2rem 1.5rem;
      font-size: 1.6rem;
      margin-top: 1.5rem;

      &:focus {
        outline: 1.5px solid black;
      }
    }

    .card-num {
      border-radius: 1rem 1rem 0 0;

      &:focus {
        border-radius: 1rem;
      }
    }
    .cvv {
      border-radius: 0 0 1rem 1rem;
      border-top: none;
      margin: 0;
    }
  }
  .policy {
    font-size: 1.6rem;
    color: ${color.dark_gray};

    p {
      padding-top: 2.5rem;
    }
    span {
      text-decoration: underline;
      color: ${color.dark_gray2};
      font-weight: 600;
      margin-left: 0.5rem;
    }
  }
  .dontpay {
    display: flex;
    p {
      color: ${color.dark_gray2};
      font-weight: 600;
      font-size: 1.6rem;
      margin-left: 3rem;
      span {
        font-weight: 350;
        color: ${color.dark_gray};
      }
    }
  }

  & > p {
    font-size: 1.2rem;
    color: ${color.dark_gray};
    padding: 3rem 0;
    line-height: 1.5rem;
  }

  & > button {
    background: #f00a52;
    padding: 1.3rem 2.2rem;
    color: white;
    border: none;
    border-radius: 1rem;
    font-size: 1.6rem;
    margin-bottom: 10rem;
    cursor: pointer;

    &:active {
      background: ${color.Main};
      transform: scale(0.9);
      transition: transform 0.2s ease;
    }
  }
`;
