import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { color, detailButton, flexCenter } from "../common/styled";
import { ReactComponent as SelfCheckin } from "../../svg/ic-self-checkin.svg";
import { ReactComponent as SuperHost } from "../../svg/ic-superhost.svg";
import { ReactComponent as CalenderIcon } from "../../svg/ic-calender.svg";
import Calender from "../common/Calender";
import { useSelector } from "react-redux";
import axios from "axios";

const InformationBox = () => {
  const [date, setDate] = useState(new Date());
  const reservationInfo = useSelector((state) => state.searchHouseReducer);
  const houseIdxInfo = useSelector((state) => state.storeHouseIdxReducer);
  const [bigType, setBigType] = useState("");
  const [smallType, setSmallType] = useState("");
  const [houseGuest, setHouseGuest] = useState("");
  const [houseBed, setHouseBed] = useState("");
  const [houseBath, setHouseBath] = useState("");
  const [houseRoom, setHouseRoom] = useState("");
  const [houseContent, setHouseContent] = useState("");
  const [houseImg, setHouseImg] = useState("");
  const [hostImg, setHostImg] = useState("");
  const [city, setCity] = useState("");
  const [gu, setGu] = useState("");

  //host
  const [hostName, setHostName] = useState("");
  const [isSuper, setIsSuper] = useState("");

  //편의시설
  const [facilities, setFacilities] = useState([]);

  const onErrorImg = (e) => {
    e.target.src =
      "https://a0.muscache.com/im/pictures/user/bd59d9d7-1baf-412e-845e-6ef59504e881.jpg?im_w=240";
  };

  useEffect(async () => {
    roomInformationApi();
    hostInformationApi();
    facilitiesInformationApi();
  }, []);
  //--------------------------api---------------------------
  //1. 숙소 정보
  const roomInformationApi = async () => {
    try {
      const res = await axios({
        baseURL: "http://joon-serverlab.shop/",
        method: "get",
        url: `app/houses/by-house/${houseIdxInfo.houseIdx}`,
        params: { houseIdx: houseIdxInfo.houseIdx },
      });
      setHouseGuest(res.data.result[0].houseGuest);
      setHouseRoom(res.data.result[0].houseRoom);
      setHouseBed(res.data.result[0].houseBed);
      setHouseBath(res.data.result[0].houseBath);
      setHouseContent(res.data.result[0].houseContent);
      setHouseImg(res.data.result[0].houseImg);
      setCity(res.data.result[0].city);
      setGu(res.data.result[0].gu);

      if (res.data.result[0].bigType === "A") setBigType("아파트");
      if (res.data.result[0].bigType === "H") setBigType("주택");
      if (res.data.result[0].bigType === "N") setBigType("별채");

      if (res.data.result[0].smallType === "W") setSmallType("전체");
      if (res.data.result[0].smallType === "P") setSmallType("개인실");
      if (res.data.result[0].smallType === "S") setSmallType("다인실");
    } catch (e) {
      console.log(e);
    }
  };
  //2. host
  const hostInformationApi = async () => {
    try {
      const res = await axios({
        baseURL: "http://joon-serverlab.shop/",
        method: "get",
        url: `app/users/${houseIdxInfo.hostIdx}`,
        params: { houseIdx: houseIdxInfo.hostIdx },
      });
      setHostName(res.data.result.firstName);
      setIsSuper(res.data.result.isSuper);
      // setHostImg(res.data.result.hostImg);
    } catch (e) {
      console.log(e);
    }
  };

  //3. 편의시설
  const facilitiesInformationApi = async () => {
    try {
      const res = await axios({
        baseURL: "http://joon-serverlab.shop/",
        method: "get",
        url: `/app/houses/show/facilities/${houseIdxInfo.hostIdx}`,
      });
      setFacilities(res.data.result);
    } catch (e) {
      console.log(e);
    }
  };
  //--------------------------------------------------------

  return (
    <WrapperStyle>
      <section className="room-title">
        <div>
          <h3>
            {hostName}님이 호스팅하는 {bigType} {smallType}
          </h3>
          <p>
            최대 인원 {houseGuest}명 • {houseRoom}개의 룸 • 침대 {houseBed}개 •
            욕실 {houseBath}개
          </p>
        </div>
        <div>
          <img src={hostImg} alt="호스트 사진" onError={onErrorImg} />
        </div>
      </section>
      <section className="room-information">
        <div>
          <SelfCheckin className="icon" />
          <div className="room-info-text">
            <p>셀프 체크인</p>
            <p>열쇠 보관함을 이용해 체크인하세요.</p>
          </div>
        </div>
        {isSuper === "A" && (
          <div className="is-superhost">
            <SuperHost className="icon" />
            <div className="room-info-text">
              <p>{hostName}님은 슈퍼호스트입니다.</p>
              <p>
                슈퍼호스트는 풍부한 경험과 높은 평점을 자랑하며 게스트가
                숙소에서 편안히 머무를 수 있도록 최선을 다하는 호스트입니다.
              </p>
            </div>
          </div>
        )}

        <div>
          <CalenderIcon className="icon" />
          <div className="room-info-text">
            <p>
              {date.getMonth() + 2}월 {date.getDate()}일 전까지 무료 취소 가능
            </p>
          </div>
        </div>
      </section>
      <section className="room-content">{houseContent}</section>
      <section className="room-location">
        <h3>숙박 장소</h3>
        <div>
          <img src={houseImg} />
          {houseRoom}개의 룸의<br></br> {houseBed}개의 침대가 있습니다.
        </div>
      </section>
      <section className="room-facilities">
        <h3>숙박 편의시설</h3>
        <div className="facilities">
          {facilities.map((item, index) => (
            <div key={index} className="facility">
              <CalenderIcon />
              <span>{item.optionName}</span>
            </div>
          ))}
        </div>
        <button>편의시설 모두 보기</button>
      </section>
      <section className="calender">
        <h3>
          {gu}, {city}에서 {reservationInfo.stayDay}박
        </h3>
        <Calender />
      </section>
    </WrapperStyle>
  );
};

export default InformationBox;
const WrapperStyle = styled.div`
  width: 100%;
  padding-right: 5rem;

  h3 {
    font-size: 2.2rem;
    font-weight: 500;
    padding-bottom: 2rem;
  }

  .room-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    line-height: 3rem;

    padding-bottom: 2rem;
    border-bottom: 1px solid ${color.medium_gray};
    h3 {
      padding-bottom: 0;
    }
    p {
      font-size: 1.6rem;
      word-break: keep-all;
    }
    img {
      border-radius: 50%;
      width: 5rem;
    }
  }

  .room-information {
    padding: 3rem 0;
    border-bottom: 1px solid ${color.medium_gray};

    & > div {
      display: flex;

      .icon {
        margin-right: 1rem;
      }
    }

    .room-info-text {
      p:nth-child(1) {
        font-size: 1.6rem;
        font-weight: 500;
        margin-bottom: 5px;
        line-height: 2rem;
        color: ${color.dark_gray2};
      }
      p:nth-child(2) {
        font-size: 1.4rem;
        font-weight: 500;
        margin-bottom: 5px;
        line-height: 2rem;
        color: ${color.medium_gray2};
        margin-bottom: 2rem;
      }
    }
  }

  .room-content {
    padding: 3rem 0;
    border-bottom: 1px solid ${color.medium_gray};
    font-size: 1.6rem;
  }

  .room-location {
    padding: 4rem 0;
    border-bottom: 1px solid ${color.medium_gray};

    & > div {
      ${flexCenter}
      flex-direction:column;
      width: 20rem;
      height: 20rem;
      border: 1px solid ${color.medium_gray};
      border-radius: 1rem;
      padding: 2rem;
      font-size: 1.6rem;
      font-weight: 500;
      line-height: 2rem;
      text-align: center;
      overflow: hidden;
      img {
        width: 100%;

        margin-bottom: 1rem;
      }
    }
  }

  .room-facilities {
    font-size: 16px;
    padding: 4rem 0;
    border-bottom: 1px solid ${color.medium_gray};

    .facilities {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 2rem;

      .facility {
        display: flex;
        align-items: center;
        span {
          margin-left: 1rem;
        }
      }
    }
    button {
      ${detailButton};
    }
  }

  .calender {
    padding: 4rem 0;
    height: 45rem;
  }
`;
