import React, { useState } from "react";
import styled from "styled-components";
import { flexCenter, color } from "../common/styled";
import SearchItem from "./SearchItem";

const SearchListSection = () => {
  //local state
  const [num, setNum] = useState(10);
  return (
    <>
      <WrapStyle>
        <div className="list-section">
          <div className="info-text-section">
            <p>지도에 표시된 지역에 위치한 ${num}개 이상의 숙소</p>
            <p>
              여행 날짜와 게스트 인원수를 입력하면 1박당 총 요금을 확인할 수
              있습니다.
            </p>
            <p>
              예약하기 전에 코로나19 관련 여행 제한 사항을 확인하세요.{" "}
              <a>자세히 알아보기</a>
            </p>
          </div>

          <div className="item-section">
            <SearchItem />
            <SearchItem />
            <SearchItem />
          </div>
        </div>
      </WrapStyle>
    </>
  );
};

export default SearchListSection;

const WrapStyle = styled.section`
  width: 58%;
  box-sizing: border-box;

  display: flex;
  justify-content: center;

  .list-section {
    width: 94%;
  }

  .info-text-section {
    border-bottom: 1px solid ${color.medium_gray};

    p {
      font-size: 1.4rem;
      padding-bottom: 2.7rem;
      color: ${color.dark_gray};

      &:nth-child(2) {
        color: ${color.medium_gray2};
      }
    }
  }
`;
