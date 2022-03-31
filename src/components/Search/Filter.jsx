import React, { useState } from "react";
import styled from "styled-components";
import { check, color, flexCenter } from "../common/styled";
import { ReactComponent as DropIcon } from "../../svg/ic-dropdown.svg";
import { ReactComponent as FilterIcon } from "../../svg/ic-filter.svg";
import { useDispatch, useSelector } from "react-redux";
import { filterKeyword } from "../../store/actions/filter";

const Filter = () => {
  const [filterList, setFilterList] = useState(["요금", "숙소 유형"]);
  const dispatch = useDispatch();
  const keyword = useSelector((state) => state.filterReducer);
  const [border, setBorder] = useState(false);

  const [detailList, setDetailList] = useState([
    "취소 수수료 없음",
    "무선 인터넷",
    "에어컨",
    "난방",
    "세탁기",
    "헤어드라이어",
    "주방",
    "화재경보기",
    "욕실 단독 사용",
    "업무 전용 공간",
    "TV",
  ]);

  //function: filter click
  //button에 value 값을 주고 출력하게 함. 나중에 filter 에 쓰일 예정
  const handleClickFilter = (e) => {
    dispatch(filterKeyword(e.target.value));
    setBorder(true);
  };

  return (
    <>
      <WrapStyle>
        <BoxStyle>
          <div className="filter-section">
            {filterList.map((item) => (
              <ButtonStyle key={item}>
                <span>{item}</span>
                <DropIcon />
              </ButtonStyle>
            ))}
          </div>

          <div className="detail-filter-section">
            {detailList.map((item) => (
              <ButtonStyle
                onClick={handleClickFilter}
                key={item}
                value={item}
                border={border}
              >
                {item}
              </ButtonStyle>
            ))}
            <ButtonStyle className="filter-button">
              <FilterIcon />
              <span>필터</span>
            </ButtonStyle>
          </div>
        </BoxStyle>
      </WrapStyle>
    </>
  );
};
export default Filter;

const WrapStyle = styled.div`
  width: 100%;
  background: white;
  border-bottom: 1px solid ${color.medium_gray};
  padding: 1.5rem 0;
  ${flexCenter};
  position: sticky;
  top: 8.5rem;
  z-index: 1;
`;

const BoxStyle = styled.div`
  width: 95%;
  display: flex;
  justify-content: space-between;

  .filter-section {
    display: flex;
    justify-content: space-between;
    width: 15%;

    padding-right: 1rem;
    border-right: 1px solid ${color.medium_gray};
    button {
      span {
        margin-right: 5px;
      }
    }
  }
  .detail-filter-section {
    margin-left: 1.3rem;
    display: flex;
    justify-content: space-between;
    width: 85%;
  }

  .filter-button {
    span {
      margin-left: 5px;
    }
  }
`;

const ButtonStyle = styled.button`
  display: flex;
  color: ${color.dark_gray};
  padding: 1.2rem 1.5rem;
  border: 1px solid ${color.medium_gray};
  border-radius: 2rem;
  background: white;
  font-size: 14px;
  font-weight: 350;
  &:hover {
    border: 1px solid ${color.black};
  }
`;
