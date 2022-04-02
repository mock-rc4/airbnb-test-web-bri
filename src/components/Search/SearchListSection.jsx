import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Pagination from "../common/Pagination";
import { flexCenter, color } from "../common/styled";
import SearchItem from "./SearchItem";

const SearchListSection = () => {
  //local state
  const [datas, setDatas] = useState([]);

  //redux 저장 값으로 뿌려주기
  const searchInfo = useSelector((state) => state.searchHouseReducer);
  const [loc, setLoc] = useState(searchInfo.location);
  const [checkin, setCheckin] = useState(searchInfo.checkin);
  const [checkout, setCheckout] = useState(searchInfo.checkout);
  const [people, setPeople] = useState(searchInfo.people);
  const [facility, setFacility] = useState("");

  //페이지네이션 관련 state
  const [limit, setLimit] = useState(6); // 한페이지에 보여줄 갯수
  const [page, setPage] = useState(1); //현재 페이지
  const offset = (page - 1) * limit; //시작 인덱스 계산

  //필터링 관련 state
  const keyword = useSelector((state) => state.filterReducer);

  useEffect(() => {
    search();
  }, [searchInfo.location]);

  useEffect(() => {
    reSearch();
  }, [keyword]);

  //------------api------------------
  //1. 하우스 정보
  const search = async () => {
    try {
      const res = await axios({
        method: "get",
        url: `app/houses?loc=${loc}&str=${checkin}&end=${checkout}&ppl=${people}&facility=`,
        baseURL: "http://joon-serverlab.shop/",
      });
      setDatas(res.data.result);
    } catch (e) {
      console.log(e);
    }
  };

  //2. 필터로 재검색
  const reSearch = async () => {
    try {
      const res = await axios({
        method: "get",
        url: `app/houses/filter?loc=${loc}&str=${checkin}&end=${checkout}&ppl=${people}&facility=${keyword.keyword}`,
        baseURL: "http://joon-serverlab.shop/",
      });
      setDatas(res.data.result);
    } catch (e) {
      console.log(e);
    }
  };

  //---------------------------------

  return (
    <>
      <WrapStyle>
        <div className="list-section">
          <div className="info-text-section">
            <p>
              지도에 표시된 지역에 위치한 {datas ? `${datas.length}` : "0"}개
              이상의 숙소
            </p>
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
            {!datas ? (
              <p className="non-search">검색 결과가 없습니다.</p>
            ) : (
              datas
                .slice(offset, offset + limit)
                .map((item, index) => (
                  <SearchItem
                    key={index}
                    hostIdx={item.hostIdx}
                    houseIdx={item.houseIdx}
                    houseImg={item.houseImg}
                    gu={item.gu}
                    bigType={item.bigType}
                    smallType={item.smallType}
                    houseName={item.houseName}
                    reviewStar={item.reviewStar}
                    reviewCount={item.reviewCount}
                    houseGuest={item.houseGuest}
                    houseBed={item.houseBed}
                    houseRoom={item.houseRoom}
                    houseBath={item.houseBath}
                    housePrice={item.housePrice}
                    totalPrice={item.totalPrice}
                  />
                ))
            )}
            {datas && (
              <>
                <Pagination
                  total={datas.length}
                  limit={limit}
                  page={page}
                  setPage={setPage}
                />
                <p className="notice">
                  총 {datas.length}개의 숙소중 {offset + 1} ~ {limit + offset}{" "}
                  번째
                </p>
                <p className="small-notice">
                  전체 요금을 보려면 날짜를 입력하세요. 추가 요금이 적용되고
                  세금이 추가될 수 있습니다.
                </p>
              </>
            )}
          </div>

          {/* 필요한거 : houseImg, gu, bigType, smallType, houseName, reviewStar, reviewCount, houseGuest, houseBed, houseRoom,ㄴhouseBath,  */}
        </div>
      </WrapStyle>
    </>
  );
};

export default SearchListSection;

const WrapStyle = styled.section`
  width: 100%;
  box-sizing: border-box;

  display: flex;
  justify-content: center;

  .list-section {
    width: 94%;
  }

  .info-text-section {
    border-bottom: 1px solid ${color.medium_gray};
    padding-top: 3rem;
    p {
      font-size: 1.4rem;
      padding-bottom: 2.7rem;
      color: ${color.dark_gray};

      &:nth-child(2) {
        color: ${color.medium_gray2};
      }
    }
  }

  .item-section {
    margin-bottom: 4rem;
    .non-search {
      text-align: center;
      font-size: 1.6rem;
      color: ${color.medium_gray2};
      margin-top: 10rem;
    }
  }

  .notice {
    width: 100%;
    text-align: center;
    font-size: 1.4rem;
    color: ${color.dark_gray};
    margin-bottom: 4rem;
  }
  .small-notice {
    width: 100%;
    text-align: center;
    font-size: 1.2rem;
    color: ${color.medium_gray2};
  }
`;
