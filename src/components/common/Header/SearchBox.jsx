import React from "react";
import styled from "styled-components";
import { flexCenter, color } from "../styled";

const SearchBox = () => {
  return (
    <SearchBoxStyle>
      <section className="location">
        <p>위치</p>
        <input type="text" placeholder="어디로 여행가세요?" />
      </section>
      <section className="checkin">
        <p>체크인</p>
        <input type="text" placeholder="날짜 입력" />
      </section>
      <section className="checkout">
        <p>체크아웃</p>
        <input type="text" placeholder="날짜 입력" />
      </section>
      <section className="headcount">
        <div>
          <p>인원</p>
          <input type="text" placeholder="게스트 추가" />
        </div>
        <button>
          <img src="/image/ic-search.svg" />
        </button>
      </section>
    </SearchBoxStyle>
  );
};

export default SearchBox;

const SearchBoxStyle = styled.div`
  width: 85rem;
  background: white;
  border-radius: 50px;
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr 1.4fr;

  section {
    padding: 15px 40px;
    box-sizing: border-box;

    &:hover {
      background: ${color.light_gray2};
      border-radius: 50px;
    }

    &:hover input {
      background: ${color.light_gray2};
    }

    p {
      font-size: 12px;
      font-weight: 800;
      margin-bottom: 5px;
    }
    input {
      width: 100%;
      border: none;
      margin-left: -2px;

      &::placeholder {
        font-size: 14px;
      }

      &:focus {
        outline: none;
      }
    }
  }

  .headcount {
    display: flex;
    position: relative;
    button {
      position: absolute;
      right: 10px;
      top: 8px;
      padding: 14px 16px;
      color: white;
      font-size: 16px;
      border: none;
      border-radius: 50%;
      margin-left: -9px;
      background: ${color.Main};
      img {
        width: 16px;
      }
    }
  }
`;
