import React from "react";
import styled from "styled-components";
import Header from "../components/common/Header/Header";
import Footer from "../components/common/Footer/Footer";
import { color, flexCenter } from "../components/common/styled";
import { useNavigate } from "react-router";
import HouseManage from "../components/Management/HouseManage";
import { ReactComponent as Logo } from "../svg/ic-logo.svg";

const ManagementPage = () => {
  const navigate = useNavigate();

  return (
    <WrapperStyle>
      <header>
        <LogoStyle onClick={() => navigate("/")} />
        <ul>
          <li>투데이</li>
          <li>메시지</li>
          <li>달력</li>
          <li>인사이트</li>
          <li>메뉴</li>
        </ul>
      </header>
      <main>
        <div className="title-section">
          <h1>투데이</h1>
          <div className="introduce">
            <p>자기소개를 업데이트해주세요.</p>
            <p>게스트의 숙소 예약 확률이 높아집니다!</p>
            <button onClick={() => navigate("/setting/personal")}>수정</button>
          </div>
        </div>

        <HouseManage />
      </main>
      <Footer widthper="80%" />
    </WrapperStyle>
  );
};

export default ManagementPage;

const WrapperStyle = styled.div`
  width: 100%;
  header {
    width: 100%;
    padding: 2.5rem 0;
    position:relative;

    ul {
      ${flexCenter}
      font-size: 1.4rem;
      font-weight: 500;
      li {
        padding: 0 2rem;
        color: ${color.dark_gray};
      }
    }
  }
  main{
    ${flexCenter}
    flex-direction:column;
  }


  .title-section {
    width: 100%;

    padding 7rem 22rem;
    background: linear-gradient(270deg, rgb(240, 1, 126), rgb(60, 30, 150));
    h1{
      color: white;
      font-size: 3.2rem;
      font-weight: 600;
      margin-bottom:2rem;
    }
    .introduce{
      background:white;
      border-radius: 1rem;
      padding:2rem;
      width:30%;
      p{
        font-size: 1.5rem;
        font-weight:500;
        color:${color.dark_gray2};
        line-height:2rem;
      }
      p:nth-child(2){
        font-size: 1.4rem;
        font-weight:500;
        color:${color.medium_gray2};
      }
      button{
        background:white;
        border:none;
        padding:0;
        padding-top:1rem;
        text-decoration:underline;
        border-radius: 1rem;
        font-weight:700;
        font-size:1.4rem;
        cursor:pointer;
      }
   }
  }
`;

const LogoStyle = styled(Logo)`
  fill: ${color.Main};
  position: absolute;
  top: 50%;
  left: 5rem;
  cursor: pointer;
  transform: translateY(-50%);
`;
