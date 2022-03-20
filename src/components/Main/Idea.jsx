import React, { useState } from "react";
import styled from "styled-components";
import { flexCenter, color, mainTitle } from "../common/styled";
import IdeaBox from "./IdeaBox";

const Idea = () => {
  const [location, setLocation] = useState([
    {
      location: "서울",
      distance: "2",
      image:
        "https://a0.muscache.com/im/pictures/19d4c139-3615-4440-b5e3-55ee3f87e240.jpg?im_q=highq&im_w=720",
      background: "#ba2c6c",
    },
    {
      location: "인천",
      distance: "29",
      image:
        "https://a0.muscache.com/im/pictures/55250d06-92f1-4d22-be89-9f20f2bcb1fc.jpg?im_q=highq&im_w=720",
      background: "#e7473a",
    },
    {
      location: "대구",
      distance: "237",
      image:
        "https://a0.muscache.com/im/pictures/086a16e3-47ef-4616-bbcd-147e03f32d47.jpg?im_q=highq&im_w=720",
      background: "#da3b4d",
    },
    {
      location: "대전",
      distance: "140",
      image:
        "https://a0.muscache.com/im/pictures/ee86b8d6-b214-43f5-912c-3db2637a5724.jpg?im_q=highq&im_w=720",
      background: "#ee4255",
    },
  ]);
  return (
    <>
      <BoxStyle>
        <div className="idea-box">
          <h2>설레는 다음 여행을 위한 아이디어</h2>
          {/* 아이디어 박스 만들어서 사진-위치 묶고 map 으로 뿌려주기 */}
          <div className="idea-cardbox">
            {location.map((item, index) => (
              <IdeaBox
                key={index}
                location={item.location}
                distance={item.distance}
                image={item.image}
                background={item.background}
              />
            ))}
          </div>
        </div>
      </BoxStyle>
    </>
  );
};

export default Idea;

const BoxStyle = styled.section`
  width: 100%;
  padding-top: 9.6rem;
  ${flexCenter}

  .idea-box {
    width: 90%;

    h2 {
      ${mainTitle}
    }

    .idea-cardbox {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-gap: 2rem;
    }
  }
`;
