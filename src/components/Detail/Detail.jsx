import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { color, flexCenter } from "../common/styled";
import DetailTitleSection from "./DetailTitleSection";
import DetailContent from "./DetailContent";
import LocationSection from "./LocationSection";
import ReviewSection from "./ReviewSection";
import NoticeSection from "./NoticeSection";
import HostSection from "./HostSection";

const Detail = () => {
  //api 가져와서 props 여기저기 넘겨줘여함.....
  //state
  const contentRef = useRef([]); //마우스 옮길 곳
  const navRef = useRef(); // 네바게이션 바
  const [scrollY, setScrollY] = useState(window.scrollY);
  const navList = useState("사진", "편의시설", "후기", "위치");

  //life cycle
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollY]);

  //function
  //스크롤
  const handleScroll = () => {
    setScrollY(window.scrollY);
    if (scrollY > 500) {
      navRef.current.style.display = "flex";
    } else {
      navRef.current.style.display = "none";
    }
  };
  const handleMoveScroll = (index) => {
    contentRef.current[index].scrollIntoView({ behavior: "smooth" });
  };

  //여기서 스크롤 이벤트 주기
  return (
    <WrapperStyle>
      <NavStyle ref={navRef}>
        <ul>
          <li onClick={() => handleMoveScroll(0)}>사진</li>
          <li onClick={() => handleMoveScroll(1)}>편의시설</li>
          <li onClick={() => handleMoveScroll(2)}>후기</li>
          <li onClick={() => handleMoveScroll(3)}>위치</li>
        </ul>
      </NavStyle>
      {/* 메인내용 */}
      <DetailTitleSection contentRef={contentRef} />
      <DetailContent contentRef={contentRef} />
      <ReviewSection contentRef={contentRef} />
      <LocationSection contentRef={contentRef} />
      <HostSection />
      <NoticeSection />
    </WrapperStyle>
  );
};

export default Detail;

const WrapperStyle = styled.div`
  width: 100%;
`;

const NavStyle = styled.nav`
  width: 100%;
  border-bottom: 1px solid ${color.medium_gray};
  position: sticky;
  background: white;
  top: 0;
  ${flexCenter};
  display: none;
  z-index: 1;

  ul {
    width: 80%;
    min-width: 110rem;
    display: flex;
    font-size: 1.4rem;
    font-weight: 500;

    li {
      margin-right: 2.5rem;
      padding: 3.2rem 0 3rem 0;
      cursor: pointer;
      color: ${color.black};
      box-sizing: border-box;
      border-bottom: 4px solid white;
      &:hover {
        border-bottom: 4px solid ${color.black};
      }
    }
  }
`;
