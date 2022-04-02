import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { addSmallType } from "../../store/actions/addHosting";
import { useDispatch } from "react-redux";
import {
  flexCenter,
  hostingButton,
  color,
} from "../../components/common/styled";
import { useSelector } from "react-redux";
import DetailHeader from "../../components/Hosting/DetailHeader";
import DetailNav from "../../components/Hosting/DetailNav";
import LeftSection from "../../components/Hosting/LeftSection";
import axios from "axios";

const ConfirmPage = () => {
  //local state
  const dispatch = useDispatch();
  const houseInfo = useSelector((state) => state.addHostingReducer);
  const userInfo = useSelector((state) => state.loginReducer);
  const [userIndex, setUserIndex] = useState(userInfo.userIdx);
  const [userName, setUserName] = useState("");
  const [big, setBig] = useState("");
  const [small, setSmall] = useState("");
  const [addrIdx, setAddrIdx] = useState(houseInfo.address);
  const [address, setAddress] = useState("");

  console.log(addrIdx);

  //불러올 api: user 정보랑 주소 정보 불러서 houseinfo 랑 주소 같은거 뿌려줘.

  //------------------------api zone------------------------
  //1. user 정보
  const userInformation = async () => {
    try {
      const res = await axios({
        baseURL: "http://joon-serverlab.shop/",
        method: "get",
        url: `app/users/${userIndex}`,
        params: {
          userIdx: userIndex,
        },
      });
      //성공하면,
      setUserName(res.data.result.firstName);
    } catch (e) {
      console.log(e);
    }
  };

  //2. 주소 정보 뿌려주는 api 생기면 할것
  const addrInformation = async () => {
    try {
      const res = await axios({
        baseURL: "http://joon-serverlab.shop/",
        method: "get",
        url: `app/houses/show/address/${addrIdx}`,
        params: {
          addrIdx: addrIdx,
        },
      });
      //성공하면,
      setAddress(
        `${res.data.result.country} ${res.data.result.city} ${res.data.result.gu} ${res.data.result.apt}`
      );
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(async () => {
    userInformation();
    addrInformation();
  }, []);

  //--------------------------------------------------------

  //life cycle
  //알파벳 변경해줌
  useEffect(() => {
    if (houseInfo.bigType === "A") setBig("아파트");
    else if (houseInfo.bigType === "H") setBig("주택");
    else if (houseInfo.bigType === "N") setBig("별채");

    if (houseInfo.smallType === "W") setSmall("전체");
    else if (houseInfo.smallType === "P") setSmall("개인실");
    else if (houseInfo.smallType === "S") setSmall("다인실");
  }, []);

  return (
    <WrapperStyle>
      <LeftSection
        title="새로운 숙소 페이지를 확인하세요"
        subtitle="내용 저장 후 몇 가지 세부정보를 확인해 주셔야 숙소 등록을 완료하실 수 있습니다."
      />
      <div className="right-section">
        <DetailHeader isdark="false" />
        <main>
          <div className="confirm-box">
            <section className="image">
              <img src={houseInfo.image} alt="숙소 사진" />
            </section>
            <section className="title">
              <h1>{houseInfo.name}</h1>
            </section>
            <section className="subtitle">
              <h2>
                {userName}님이 호스팅 하는<br></br> {big} {small}
                <img src="/img/user.jpg" />
              </h2>
            </section>
            <section className="info">
              <p>
                최대 인원 {houseInfo.guest}명 · 침실 {houseInfo.bed}개 · 침대{" "}
                {houseInfo.room}개 · 욕실 {houseInfo.bath}개
              </p>
            </section>
            <section className="content">
              <h3>{houseInfo.content}</h3>
            </section>
            <section className="location">
              <h3>위치</h3>
              <p>{address}</p>
              <span>
                숙소 주소는 예약이 확정된 게스트에게만 공개되니 안심하세요.
              </span>
            </section>
          </div>
        </main>
        <DetailNav
          nextBtnAble="d"
          backPrev="/hosting/roomprice"
          goNext="/hosting/complete"
        />
      </div>
    </WrapperStyle>
  );
};

export default ConfirmPage;

const WrapperStyle = styled.main`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr;

  & > div {
    width: 100%;
    position: relative;
  }

  .right-section {
    main {
      ${flexCenter}
    }

    .confirm-box {
      width: 45%;
      height: 65vh;
      overflow-y: scroll;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      border: 1px solid ${color.medium_gray};
      border-radius: 2rem;
      padding: 0 2rem;
      box-shadow: 0px 5px 20px 3px ${color.medium_gray};
      &::-webkit-scrollbar {
        display: none; /* Chrome, Safari, Opera*/
      }
      section {
        border-bottom: 1px solid ${color.medium_gray};
        padding: 2.3rem 0;
      }
    }
    .image {
      height: 43%;

      word-break: keep-all;
      overflow: hidden;
      img {
        width: 100%;
        //height: 100%;
      }
    }
    .title {
      font-size: 2.6rem;
      word-break: keep-all;
      font-weight: 550;
    }
    .subtitle {
      font-weight: 500;
      font-size: 1.8rem;
      word-break: keep-all;
      line-height: 2.4rem;
      position: relative;
      img {
        position: absolute;
        right: 0;
        border-radius: 50%;
        top: 50%;
        transform: translateY(-50%);
        width: 4rem;
      }
    }
    .info {
      font-size: 1.6rem;
      word-break: keep-all;
      color: ${color.dark_gray2};
    }
    .content {
      font-size: 1.4rem;
      word-break: keep-all;
      line-height: 2rem;
      color: ${color.dark_gray};
    }
    .location {
      word-break: keep-all;
      h3 {
        font-weight: 550;
        font-size: 1.6rem;
        margin-bottom: 1.5rem;
      }
      p {
        font-size: 1.6rem;
        color: ${color.dark_gray2};
        padding: 1rem 0;
      }
      span {
        color: ${color.medium_gray2};
        font-size: 1.2rem;
        line-height: 1.5rem;
      }
    }
  }
`;
