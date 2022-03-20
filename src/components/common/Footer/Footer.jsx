import React from "react";
import styled from "styled-components";
import { color, flexCenter } from "../styled";
import FooterSection from "./FooterSection";

const Footer = () => {
  return (
    <PageWrap>
      <footer className="box-footer">
        <div className="box-footer-navigation">
          <FooterSection title="에어비앤비 지원" />
          <FooterSection title="커뮤니티" />
          <FooterSection title="호스팅" />
          <FooterSection title="소개" />
        </div>

        <section className="bottom-footer">
          <div className="box-footer-information">
            <p>&copy; 2022 Airbnb, Inc.</p>
            <span>개인정보 처리방침</span>
            <span>이용약관</span>
            <span>사이트맵</span>
            <span>한국의 변경된 환불 정책</span>
            <span>회사 세부정보</span>
          </div>

          <div className="box-footer-langSns">
            <div className="lang">
              <span>
                <img src="image/ic-global.svg" />
                한국어(KR)
              </span>
              <span>
                <span className="money">$</span>
                USD
              </span>
            </div>
            <div className="sns">
              <a href="https://www.facebook.com/AirbnbKorea">
                <img src="image/ic-facebook.svg" alt="페이스북" />
              </a>
              <a href="https://twitter.com/airbnb">
                <img src="image/ic-twitter.svg" alt="트위터" />
              </a>
              <a href="https://www.airbnb.co.kr/?has_logged_out=1">
                <img src="image/ic-instagram.svg" alt="인스타" />
              </a>
              <a href="https://blog.naver.com/airbnbkr">
                <img src="image/ic-blog.svg" alt="블로그" />
              </a>
              <a href="https://post.naver.com/airbnb_kr">
                <img src="image/ic-naverpost.svg" alt="포스트" />
              </a>
            </div>
          </div>
        </section>
      </footer>
    </PageWrap>
  );
};

export default Footer;

const PageWrap = styled.div`
  width: 100%;

  height: fit-content;
  background: ${color.light_gray};
  ${flexCenter}

  .box-footer {
    display: flex;
    flex-direction: column;
    width: 90vw;
  }

  .bottom-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .box-footer-navigation {
    display: flex;
    padding: 4.8rem 0;
    border-bottom: 1px solid ${color.medium_gray};
  }
  .box-footer-information {
    display: flex;
    font-size: 1.4rem;
    padding: 3rem 0;
    p {
      margin-right: 1rem;
    }
    span {
      color: ${color.dark_gray};
      cursor: pointer;
      margin-right: 1rem;
      &:hover {
        text-decoration: underline;
      }
    }
    span:before {
      content: "・";
      margin-right: 1rem;
    }
  }

  .box-footer-langSns {
    display: flex;
    font-size: 1.4rem;

    .lang {
      margin-right: 3rem;
      & > span {
        color: black;
        margin-right: 2rem;
        cursor: pointer;
        text-decoration: underline;

        .money {
          margin-right: 1rem;
        }
      }
      img {
        width: 1.2rem;
        height: 1.2rem;
        margin-right: 1rem;
      }
    }

    .sns {
      img {
        width: 18px;
        margin-left: 2rem;
      }
    }
  }
`;
