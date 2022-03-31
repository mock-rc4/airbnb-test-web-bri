import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { color, flexCenter } from "../styled";
import { ReactComponent as Search } from "../../../svg/ic-search.svg";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { openSearchBar } from "../../../store/actions/openSearchBar";
import LocationPopup from "./LocationPopup";
import CalenderPop from "./CalenderPop";
import PeoplePop from "./PeoplePop";
import { addLocation } from "../../../store/actions/searchHouse";
import { useNavigate } from "react-router";
import axios from "axios";

const SearchBar = ({ isfix, open }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [openSearch, setOpenSearch] = useState(open);

  const [locationPop, setLocationPop] = useState(false);
  const [calenderPop, setCalenderPop] = useState(false);
  const [peoplePop, setPeoplePop] = useState(false);

  //리덕스 값 저장
  const isOpen = useSelector((state) => state.openSearchBarReducer);
  const searchInfo = useSelector((state) => state.searchHouseReducer);
  const [people, setPeople] = useState(searchInfo.people);

  useEffect(() => {
    setPeople(searchInfo.people);
    console.log(searchInfo.people);
  }, [searchInfo.people]);

  const handleClickReading = () => {
    navigate("/search");
    dispatch(openSearchBar(false));
  };

  const handleClickPop = (e) => {
    const {
      target: { value, name },
    } = e;

    if (name === "location") {
      setLocationPop(!locationPop);
      setCalenderPop(false);
      setPeoplePop(false);
    } else if (name === "checkin" || name === "checkout") {
      setLocationPop(false);
      setCalenderPop(!calenderPop);
      setPeoplePop(false);
    } else if (name === "people") {
      setLocationPop(false);
      setCalenderPop(false);
      setPeoplePop(!peoplePop);
    }
  };

  const handleInputValue = (e) => {
    dispatch(addLocation(e.target.value));
  };

  return (
    <WrapperStyle isfix={isfix} openSearch={openSearch} isopen={isOpen.isOpen}>
      <div>
        <SearchBoxStyle isfix={isfix} openSearch={openSearch}>
          <section className="location">
            <p>위치</p>
            <input
              name="location"
              type="text"
              placeholder="어디로 여행가세요?"
              onClick={handleClickPop}
              onChange={handleInputValue}
            />
          </section>
          {locationPop && <LocationPopup />}
          <section className="checkin">
            <p>체크인</p>
            <input
              name="checkin"
              type="text"
              placeholder="날짜 입력"
              defaultValue={searchInfo.checkin}
              onClick={handleClickPop}
            />
          </section>
          {calenderPop && <CalenderPop />}
          <section className="checkout">
            <p>체크아웃</p>
            <input
              name="checkout"
              type="text"
              placeholder="날짜 입력"
              defaultValue={searchInfo.checkout}
              onClick={handleClickPop}
            />
          </section>
          <section className="headcount">
            <p>인원</p>
            <input
              name="people"
              type="text"
              placeholder="게스트 추가"
              onClick={handleClickPop}
              value={`게스트 ${searchInfo.people}명`}
              readOnly={true}
            />
            <button className="search-button" onClick={handleClickReading}>
              <Search />
            </button>
          </section>
          {peoplePop && <PeoplePop />}
        </SearchBoxStyle>
      </div>
    </WrapperStyle>
  );
};

export default SearchBar;

const WrapperStyle = styled.div`
  position: relative;
  width: 100%;
  background: ${(props) => (props.isfix ? "white" : `${color.black}`)};
  opacity: ${(props) => (props.isfix ? "white" : `black`)};
  position: absolute;
  top: 8rem;
  ${flexCenter}
  opacity: ${(props) => (props.isopen ? "1" : "0")};
  pointer-events: ${(props) => (props.isopen ? "" : "none")};

  & > div {
    width: 85rem;
    position: relative;
  }
`;

const SearchBoxStyle = styled.div`
  width: 100%;
  background: white;
  border: 1px solid ${color.medium_gray};
  border-radius: 5rem;
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr 1.4fr;
  grid-gap: 2px;
  margin-bottom: 3rem;
  overflow: hidden;
  z-index: 3;

  section {
    box-sizing: border-box;
    position: relative;
    border-right: 1px solid ${color.medium_gray};
    box-sizing: border-box;
    &:nth-child(4) > div {
      border: none;
    }

    p {
      font-size: 12px;
      font-weight: 800;
      margin-bottom: 5px;
      position: absolute;
      top: 1.2rem;
      left: 2.8rem;
    }
    input {
      width: 100%;
      height: 100%;
      border: none;
      padding: 2.9rem 3rem 1.3rem 3rem;
      border-radius: 5rem;
      margin-left: -2px;
      box-sizing: border-box;
      cursor: pointer;

      &::placeholder {
        font-size: 14px;
      }

      &:hover {
        background: ${color.light_gray2};
      }

      &:focus {
        outline: none;
        backgruond: white;
        box-shadow: 1px 1px 10px 5px ${color.medium_gray};
        &:hover {
          background: white;
        }
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
      top: 50%;
      transform: translateY(-50%);
      padding: 14px;
      color: white;
      font-size: 16px;
      border: none;
      border-radius: 6rem;
      background: ${color.Main};
      cursor: pointer;
    }
  }
`;
