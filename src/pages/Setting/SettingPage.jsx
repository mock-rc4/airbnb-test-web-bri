import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../../components/common/Header/Header";
import Footer from "../../components/common/Footer/Footer";
import { color, flexCenter } from "../../components/common/styled";
import SettingBox from "../../components/Setting/SettingBox";
import axios from "axios";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";

const SettingPage = () => {
  //data state
  const [list, setList] = useState([
    { titleText: "개인정보", contentText: "개인정보 및 연락처를 알려주세요" },
    {
      titleText: "로그인 및 보안",
      contentText: "비밀번호를 변경하고 계정을 안전하게 보호하세요",
    },
    {
      titleText: "결제 및 대금 수령",
      contentText: "결제, 대금 수령, 쿠폰, 기프트카드 및 세금 검토하기",
    },
    {
      titleText: "알림",
      contentText: "알림 환경설정 및 연락 방식을 선택하세요",
    },
    {
      titleText: "개인정보 및 공개 설정",
      contentText: "연결된 앱, 공유하는 정보 및 공개 대상 관리하기",
    },
    {
      titleText: "글로벌 환경 설정",
      contentText: "기본 언어, 통화, 시간대 설정하기",
    },
    {
      titleText: "출장",
      contentText: "회사 이메일을 입력하면 출장에서 혜택을 누리실 수 있습니다.",
    },
    {
      titleText: "전문 호스팅 도구",
      contentText:
        "에어비앤비에서 여러 숙소를 관리하신다면 전문 도구를 이용해보세요.",
    },
    {
      titleText: "추천 크레딧 및 쿠폰",
      contentText: "₩0의 추천 크레딧과 쿠폰이 있습니다. 자세히 알아보기",
    },
  ]);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const userInfo = useSelector((state) => state.loginReducer);
  const [userIndex, setUserIndex] = useState(userInfo.userIdx);

  //api 불러오기(유저정보)
  useEffect(async () => {
    try {
      const res = await axios({
        baseURL: "http://joon-serverlab.shop/",
        method: "get",
        url: `app/users/${userIndex}`,
        params: { userIdx: userIndex },
      });
      console.log(res);
      setFirstName(res.data.result.firstName);
      setLastName(res.data.result.lastName);
      setEmail(res.data.result.userEmail);
    } catch (e) {
      console.log(e);
    }
  }, []);

  return (
    <WrapperStyle>
      <Header
        isfix="true"
        boxshadow="0rem 0.1rem 0.5rem 0.1rem"
        widthper="90%"
        position="sticky"
        minwidth=""
      />
      <main>
        <section className="title">
          <h1>계정</h1>
          <h3>
            <b>
              {firstName} {lastName},
            </b>
            {email} • <span>프로필로 이동</span>
          </h3>
        </section>
        <section className="content">
          {list.map((item, index) => (
            <SettingBox
              key={index}
              title={item.titleText}
              content={item.contentText}
            />
          ))}
        </section>
        <p>계정을 비활성화하셔야 하나요?</p>
        <button>지금 처리하기</button>
      </main>
      <Footer widthper="90%" />
    </WrapperStyle>
  );
};

export default SettingPage;

const WrapperStyle = styled.div`
  width: 100%;

  main {
    ${flexCenter}
    flex-direction:column;
    padding: 6rem 0;
    .title {
      width: 70%;
      h1 {
        font-size: 3.2rem;
        text-align: start;
        font-weight: 500;
        margin-bottom: 1rem;
      }
      h3 {
        font-size: 1.8rem;
        text-align: start;
        margin-bottom: 6rem;
        color: ${color.dark_gray2};
        b {
          font-weight: 500;
          margin-right: 8px;
        }
        span {
          font-weight: 550;
          text-decoration: underline;
        }
      }
    }
    .content {
      width: 70%;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 2rem;
    }
    & > p {
      font-size: 1.4rem;
      color: ${color.dark_gray};
      margin-top: 5rem;
      margin-bottom: 1rem;
    }
    & > button {
      background: white;
      border: none;
      text-decoration: underline;
      font-weight: 450;
      font-size: 1.4rem;
      cursor: pointer;
    }
  }
`;
