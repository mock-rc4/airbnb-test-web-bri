import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { color, flexCenter } from "../common/styled";
import { ReactComponent as Star } from "../../svg/ic-star.svg";
import { ReactComponent as Heart } from "../../svg/ic-heart.svg";
import { ReactComponent as Share } from "../../svg/ic-share.svg";
import { useSelector } from "react-redux";
import axios from "axios";

const DetailTitleSection = ({ contentRef }) => {
  //타이틀 섹션에서 필요한 state: 숙소이름, 별점-후기, 위치, 이미지
  //houseIdx 저장되어 있는 값
  const houseIdxInfo = useSelector((state) => state.storeHouseIdxReducer);
  const [houseName, setHouseName] = useState("");
  const [houseImg, setHouseImg] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [gu, setGu] = useState("");

  const [reviewCount, setReviewCount] = useState("");
  const [starAvg, setStarAvg] = useState("");

  useEffect(() => {
    houseInformationApi();
    starInformationApi();
  }, []);

  //--------------------------api---------------------------
  //1. 숙소 정보
  const houseInformationApi = async () => {
    try {
      const res = await axios({
        baseURL: "http://joon-serverlab.shop/",
        method: "get",
        url: `app/houses/by-house/${houseIdxInfo.houseIdx}`,
        params: { houseIdx: houseIdxInfo.houseIdx },
      });

      setHouseName(res.data.result[0].houseName);
      setHouseImg(res.data.result[0].houseImg);
      setCountry(res.data.result[0].country);
      setCity(res.data.result[0].city);
      setGu(res.data.result[0].gu);
    } catch (e) {
      console.log(e);
    }
  };

  //2.별점 api
  const starInformationApi = async () => {
    try {
      const res = await axios({
        baseURL: "http://joon-serverlab.shop/",
        method: "get",
        url: `app/reserve/review/count?houseIdx=${houseIdxInfo.houseIdx}`,
      });
      setReviewCount(res.data.result.reviewCount);
      setStarAvg(res.data.result.starAvg);
    } catch (e) {
      console.log(e);
    }
  };

  //--------------------------------------------------------

  //api 가져오기.
  return (
    <WrapperStyle ref={(el) => (contentRef.current[0] = el)}>
      <BoxStyle>
        <section className="title-section">
          <h2>{houseName}</h2>
          <div className="title-subtext-section">
            <div className="title-subtext-left">
              <span className="star-rate">
                <StarStyle />
                {starAvg}
              </span>
              <span className="review">후기 {reviewCount}개</span>
              <span className="location">
                {country} {city} {gu}
              </span>
            </div>

            <div className="title-subtext-right">
              <button>
                <ShareStyle />
                <p>공유하기</p>
              </button>
              <button>
                <HeartStyle />
                <p>저장</p>
              </button>
            </div>
          </div>
        </section>
        <section className="image-section">
          <img src={houseImg} alt="숙소 이미지" />
        </section>
      </BoxStyle>
    </WrapperStyle>
  );
};
export default DetailTitleSection;

const BoxStyle = styled.div`
  min-width: 110rem;
  width: 80%;
`;

const WrapperStyle = styled.div`
  width: 100%;
  ${flexCenter};
  .title-section {
    width: 100%;
    margin: 2.5rem 0;
    h2 {
      font-size: 2.6rem;
      font-weight: 550;
      margin-bottom: 1rem;
    }

    .title-subtext-section {
      font-size: 1.4rem;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .title-subtext-left {
        ${flexCenter};
        span {
          &::after {
            content: "• ";
            margin: 0 5px;
          }
          &:last-child::after {
            content: "";
          }
        }

        .star-rate {
          ${flexCenter};
          font-weight: 600;
        }

        .location {
          color: ${color.medium_gray2};
          font-weight: 500;
          text-decoration: underline;
        }
      }
      .title-subtext-right {
        ${flexCenter};
        button {
          padding: 0;
          ${flexCenter};
          border: none;
          background: none;
          margin-left: 2rem;
          p {
            margin-left: 0.8rem;
            line-height: 20px;
            text-decoration: underline;
            font-weight: 500;
            font-size: 1.4rem;
          }
        }
      }
    }
  }

  .image-section {
    width: 100%;
    height: 51vh;
    overflow: hidden;
    border-radius: 1.5rem;

    img {
      width: 100%;
    }
  }
`;

const StarStyle = styled(Star)`
  fill: ${color.Main};
  margin-right: 0.5rem;
  padding-bottom: 4px;
`;

const HeartStyle = styled(Heart)`
  width: 16px;
`;

const ShareStyle = styled(Share)`
  width: 16px;
`;
