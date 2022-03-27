import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { ReactComponent as Logo } from "../../svg/ic-logo-only.svg";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { color, flexCenter } from "../../components/common/styled";

const CompletePage = () => {
  const navigate = useNavigate();
  const userInfo = useSelector((state) => state.loginReducer);
  const [userIndex, setUserIndex] = useState(userInfo.userIdx);
  const [userName, setUserName] = useState("");
  const hostingInfo = useSelector((state) => state.addHostingReducer);
  //------------------------api zone------------------------
  //1. user 정보
  useEffect(async () => {
    try {
      const res = await axios({
        baseURL: "http://joon-serverlab.shop/",
        method: "get",
        url: `app/users/${userIndex}`,
        params: { userIdx: userIndex },
      });
      //성공하면,
      setUserName(res.data.result.firstName);
    } catch (e) {
      console.log(e);
    }
  }, []);

  //2. 가장 중요 !!!!!!! post 해주기 - hostingInfo 로 리덕스 값 불러옴(여기서 userIndex도 넣어줘야함.)
  const handleClickComplete = async () => {
    try {
      const res = await axios({
        baseURL: "http://joon-serverlab.shop/",
        method: "post",
        url: `app/houses/hosting`,
        data: {
          userIdx: userIndex,
          houseName: hostingInfo.name,
          houseContent: hostingInfo.content,
          bigType: hostingInfo.bigType,
          smallType: hostingInfo.smallType,
          addressIdx: hostingInfo.address,
          houseGuest: hostingInfo.guest,
          houseBed: hostingInfo.bed,
          houseRoom: hostingInfo.room,
          houseBath: hostingInfo.bath,
          housePrice: hostingInfo.price,
          houseImg: hostingInfo.image,
        },
      });
      console.log(res);
      if (res.data.isSuccess) navigate("/");
    } catch (e) {
      console.log(e);
    }
  };

  //--------------------------------------------------------

  return (
    <WrapperStyle>
      <div className="left-section">
        <div className="logo">
          <LogoStyle onClick={() => navigate("/")} />
        </div>
        <img src="https://ifh.cc/g/boct0f.jpg" />
        <div className="back"></div>
        <p>에어비앤비 CEO | DEVELOPER 브리</p>
      </div>

      <div className="right-section">
        <div className="text">
          <h1>{userName}님, 반갑습니다!</h1>
          <p>
            호스트는 에어비앤비의 중심이라 할 수 있습니다.<br></br> 이제
            호스팅의 매력을 경험해 보세요.
          </p>
          <h3>- 브리 드림</h3>
          <button onClick={handleClickComplete}>숙소 최종 등록하기</button>
        </div>
      </div>
    </WrapperStyle>
  );
};

export default CompletePage;

const WrapperStyle = styled.main`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  .logo {
    padding: 5rem;
    position: absolute;
    z-index: 1;
  }

  .left-section {
    position: relative;
    img {
      width: 100%;
      height: 100%;
    }
    .back {
      position: absolute;
      top: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(to bottom, transparent 40%, black 150%);
    }
    p {
      color: white;
      position: absolute;
      font-size: 1.6rem;
      left: 5rem;
      bottom: 20%;
    }
  }

  .right-section {
    ${flexCenter}
    background: black;
    .text {
      text-align: center;
      color: white;
      font-size: 1.6rem;
    }
    h1 {
      font-size: 4.8rem;
      font-weight: 600;
    }
    p {
      margin: 3rem 0;
      line-height: 2rem;
    }
    h3 {
      font-weight: 600;
    }
    button {
      position: absolute;
      bottom: 5rem;
      right: 5rem;
      border: none;
      border-radius: 1rem;
      background: ${color.Main};
      color: white;
      padding: 1.5rem 2rem;
      font-size: 1.6rem;
      cursor: pointer;
    }
  }
`;

const LogoStyle = styled(Logo)`
  cursor: pointer;
`;
