import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../components/common/Header/Header";
import Footer from "../components/common/Footer/Footer";
import { color, flexCenter } from "../components/common/styled";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import axios from "axios";
import WishPopup from "../components/WishList/WishPopup";

const TripPage = () => {
  const navigate = useNavigate();
  const userInfo = useSelector((state) => state.loginReducer);

  const [lastTrip, setLastTrip] = useState([]); //지난 여행
  const [expectedTrip, setExpectedTrip] = useState([]); //예정 여행

  const lastTripApi = async () => {
    try {
      const res = await axios({
        baseURL: "http://joon-serverlab.shop/",
        method: "get",
        url: `app/reserve/show-reservation/past/${userInfo.userIdx}`,
      });
      setLastTrip(res.data.result);
    } catch (e) {
      console.log(e);
    }
  };

  const expectedTripApi = async () => {
    try {
      const res = await axios({
        baseURL: "http://joon-serverlab.shop/",
        method: "get",
        url: `app/reserve/show-reservation/future/${userInfo.userIdx}`,
      });
      console.log(res);
      setExpectedTrip(res.data.result);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    lastTripApi();
    expectedTripApi();
  }, []);

  return (
    <WrapperStyle>
      <Header
        isfix="true"
        boxshadow="0rem 0.1rem 0.5rem 0.1rem"
        widthper="80%"
        position="sticky"
        minwidth=""
      />
      <main>
        <div className="content-section">
          <h1>여행</h1>
          {expectedTrip.length === 0 ? (
            <section className="no-trip">
              <p>아직 예약된 여행이 없습니다!</p>
              <p>
                여행 가방에 쌓인 먼지를 털어내고 다음 여행 계획을 세워보세요.
              </p>
              <button onClick={() => navigate("/")}>숙소 검색하기</button>
            </section>
          ) : (
            <>
              <h3>예정된 예약</h3>
              {expectedTrip.map((item, index) => (
                // <ExpectedStyle key={index}>
                //   <div className="house-info-section">
                //     <div className="house-info">
                //       {item.first}님이 호스팅 하는 ( )의 ( )
                //     </div>
                //     <img src={item.houseImg} alt="숙소 이미지" />
                //   </div>
                // </ExpectedStyle>
                <ExpectedTripStyle>
                  <img src={item.houseImg} />
                  <div className="text-section">
                    <p className="gu">{item.gu}</p>
                    <p className="host">호스트 : {item.firstName}님</p>
                    <p className="date">
                      {item.startDate.slice(0, 4)}년{" "}
                      {item.startDate.slice(5, 7)}월{" "}
                      {item.startDate.slice(8, 10)}일 ~
                      {item.endDate.slice(0, 4)}년 {item.endDate.slice(5, 7)}월{" "}
                      {item.endDate.slice(8, 10)}일
                    </p>
                  </div>
                </ExpectedTripStyle>
              ))}
            </>
          )}
          {/* 지난 여행 */}
          {lastTrip.length !== 0 ? (
            <>
              <h3 className="before-trip">이전 여행지</h3>
              {lastTrip.map((item, index) => (
                <>
                  <LastTripStyle key={index}>
                    <img src={item.houseImg} />
                    <div className="text-section">
                      <p className="gu">{item.gu}</p>
                      <p className="host">호스트 : {item.firstName}님</p>
                      <p className="date">
                        {item.startDate.slice(0, 4)}년{" "}
                        {item.startDate.slice(5, 7)}월{" "}
                        {item.startDate.slice(8, 10)}일 ~
                        {item.endDate.slice(0, 4)}년 {item.endDate.slice(5, 7)}
                        월 {item.endDate.slice(8, 10)}일
                      </p>
                    </div>
                  </LastTripStyle>
                </>
              ))}
            </>
          ) : (
            <></>
          )}
        </div>
      </main>
      <Footer widthper="80%" />
    </WrapperStyle>
  );
};

export default TripPage;

const WrapperStyle = styled.div`
  width: 100%;

  h3 {
    font-size: 2.4rem;
    font-weight: 600;
    padding-top: 3rem;
    margin-bottom: 4rem;
  }

  .before-trip {
    margin-top: 5rem;
  }

  main {
    display: flex;
    justify-content: center;
  }
  .content-section {
    width: 70%;
    margin-bottom: 8rem;

    h1 {
      font-size: 3.2rem;
      font-weight: 500;
      padding-top: 4rem;
      padding-bottom: 3rem;
    }
  }
  .no-trip {
    padding: 3rem 0;
    border-bottom: 1px solid ${color.medium_gray};
    p:nth-child(1) {
      font-size: 2.2rem;
      font-weight: 500;
      margin-bottom: 1.5rem;
    }
    p:nth-child(2) {
      font-size: 1.6rem;
      color: ${color.dark_gray};
      margin-bottom: 2rem;
    }
    button {
      background: white;
      border: 1px solid ${color.black};
      border-radius: 1rem;
      padding: 1.3rem 2.3rem;
      font-size: 1.6rem;
      font-weight: 500;
      margin-bottom: 2rem;
      cursor: pointer;

      &:active {
        transform: scale(0.95);
        background: ${color.light_gray};
      }
    }
  }
`;

const ExpectedStyle = styled.div`
  padding: 2rem 0;

  h2 {
    font-size: 2.2rem;
    font-weight: 600;
    margin-top: 3rem;
  }

  .house-info-section {
    border: none;
    width: 100%;
    height: 18rem;
    overflow: hidden;
    box-shadow: 5px 5px 10px 5px ${color.medium_gray};
    border-radius: 1rem;
    display: grid;
    grid-template-columns: 1.1fr 1fr;

    img {
      width: 100%;
      height: 100%;
    }
  }
`;

const LastTripStyle = styled.div`
  display: flex;
  margin: 2rem 0;
  border-bottom: 1px solid ${color.medium_gray};
  padding-bottom: 2.5rem;
  img {
    border-radius: 1rem;
    width: 8rem;
    height: 8rem;
    margin-right: 2rem;
  }

  .text-section {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0.5rem 0;
  }

  .gu {
    font-weight: 600;
    font-size: 2rem;
  }

  .host,
  .date {
    font-size: 1.4rem;
    color: ${color.medium_gray2};
  }
`;

const ExpectedTripStyle = styled(LastTripStyle)``;
