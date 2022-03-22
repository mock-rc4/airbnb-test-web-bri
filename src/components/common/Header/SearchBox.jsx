import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { color, flexCenter } from "../styled";
import { ReactComponent as Search } from "../../../svg/ic-search.svg";

const SearchBox = ({ isFix }) => {
  //local state
  const [openSearch, setOpenSearch] = useState(false);

  //life cycle
  useEffect(() => {
    console.log(openSearch);
  }, [openSearch]);

  return (
    <>
      <WrapStyle isFix={isFix}>
        <SearchBoxTextStyle isFix={isFix} openSearch={openSearch}>
          <li>숙소</li>
          <li>체험</li>
          <li>온라인 체험</li>
        </SearchBoxTextStyle>

        <SearchBoxStyle isFix={isFix} openSearch={openSearch}>
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
            <button className="search-button">
              <Search />
            </button>
          </section>
        </SearchBoxStyle>
      </WrapStyle>
    </>
  );
};

export default SearchBox;

const WrapStyle = styled.div`
  display: ${(props) => (props.isFix ? "none !important" : "")};
  padding-top: 1rem;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0%);
  ${flexCenter}
  flex-direction: column;
  border: 1px solid red;
`;

const SearchBoxTextStyle = styled.ul`
  ${flexCenter};
  color: ${(props) => (props.isFix ? `${color.black}` : "white")};
  font-size: 16px;
  box-sizing: border-box;
  padding-bottom: 2rem;

  li {
    padding: 2rem;
    cursor: pointer;

    &:hover {
      color: blue;
    }
  }
`;

const SearchBoxStyle = styled.div`
  width: 85rem;
  background: white;
  border-radius: 50px;
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr 1.4fr;
  margin-bottom: 3rem;
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
    .search-button {
      display: flex;
      position: absolute;
      right: 10px;
      top: 8px;
      padding: 14px 16px;
      color: white;
      font-size: 16px;
      border: none;
      border-radius: 6rem;
      background: ${color.Main};
    }
  }
`;
