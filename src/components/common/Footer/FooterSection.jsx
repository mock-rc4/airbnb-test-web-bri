import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { color, deviceSize } from "../styled";

const FooterSection = ({ title }) => {
  //Global state 선언

  //Local state 선언
  const [list, setList] = useState([]);

  //Life Cycle 선언
  useEffect(() => {
    if (title === "에어비앤비 지원") {
      setList([
        "도움말 센터",
        "안전 정보",
        "예약 취소 옵션",
        "에어비앤비의 코로나19 대응 방안",
        "장애인 지원",
        "이웃 민원 신고",
      ]);
    } else if (title === "커뮤니티") {
      setList([
        "Airbnb.org: 재난 구호 숙소",
        "아프간 난민 지원",
        "차별 철폐를 위한 노력",
      ]);
    } else if (title === "호스팅") {
      setList([
        "호스팅 시작하기",
        "에어커버: 호스트를 위한 보호 프로그램",
        "호스팅 자료 둘러보기",
        "커뮤니티 포럼 방문하기",
        "책임감 있는 호스팅",
      ]);
    } else if (title === "소개") {
      setList([
        "뉴스룸",
        "새로운 기능에 대해 알아보기",
        "에어비앤비 공동창업자의 메시지",
        "채용정보",
        "투자자 정보",
        "에어비앤비 Luxe",
      ]);
    }
  }, []);
  //함수 선언

  return (
    <SectionStyle>
      <div>
        <h3>{title}</h3>
      </div>
      <div className="text">
        {list.map((item, index) => (
          <ul key={index}>
            <li>{item}</li>
          </ul>
        ))}
      </div>
    </SectionStyle>
  );
};

export default FooterSection;

const SectionStyle = styled.section`
  flex: 1;
  font-size: 1.4rem;
  line-height: 2.5rem;

  h3 {
    font-weight: bold;
  }
  .text {
    @media ${deviceSize.tablet} {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      padding: 1.5rem 0;
      margin-bottom: 1rem;
      border-bottom: 1px solid ${color.medium_gray};
    }
    @media ${deviceSize.mobile} {
      display: block;
    }
  }

  ul > li {
    margin-top: 1rem;
    color: ${color.dark_gray};
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }
`;
