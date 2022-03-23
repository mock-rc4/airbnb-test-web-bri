import React from "react";
import styled from "styled-components";
import { color, flexCenter } from "../common/styled";
import { ReactComponent as Star } from "../../svg/ic-star.svg";
import { ReactComponent as Heart } from "../../svg/ic-heart.svg";
import { ReactComponent as Share } from "../../svg/ic-share.svg";

const DetailTitleSection = () => {
  return (
    <WrapperStyle>
      <section className="title-section">
        <h2>숙소이름</h2>
        <div className="title-subtext-section">
          <div className="title-subtext-left">
            <span className="star-rate">
              <StarStyle />
              5.0(게산값)
            </span>
            <span className="review">후기 n개</span>
            <span className="location">위치</span>
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
        <img src="/img/aboutHostingImage.jpg" alt="숙소 이미지" />
      </section>
    </WrapperStyle>
  );
};
export default DetailTitleSection;
const WrapperStyle = styled.div`
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

        .review {
          text-decoration: underline;
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
