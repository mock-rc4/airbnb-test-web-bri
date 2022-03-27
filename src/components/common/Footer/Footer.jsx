import React from "react";
import styled from "styled-components";
import { color, flexCenter } from "../styled";
import FooterSection from "./FooterSection";
import { ReactComponent as Global } from "../../../svg/ic-global.svg";
import { ReactComponent as Facebook } from "../../../svg/ic-facebook.svg";
import { ReactComponent as Twitter } from "../../../svg/ic-twitter.svg";
import { ReactComponent as Instagram } from "../../../svg/ic-instagram.svg";
import { ReactComponent as Blog } from "../../../svg/ic-blog.svg";
import { ReactComponent as Post } from "../../../svg/ic-naverpost.svg";

const Footer = ({ widthper }) => {
  return (
    <PageWrap>
      <BoxFooter widthper={widthper}>
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
                <GlobalStyle />
                한국어(KR)
              </span>
              <span>
                <span className="money">$</span>
                USD
              </span>
            </div>
            <div className="sns">
              <a href="https://www.facebook.com/AirbnbKorea">
                <Facebook />
              </a>
              <a href="https://twitter.com/airbnb">
                <Twitter />
              </a>
              <a href="https://www.airbnb.co.kr/?has_logged_out=1">
                <Instagram />
              </a>
              <a href="https://blog.naver.com/airbnbkr">
                <Blog />
              </a>
              <a href="https://post.naver.com/airbnb_kr">
                <Post />
              </a>
            </div>
          </div>
        </section>
      </BoxFooter>
    </PageWrap>
  );
};

export default Footer;

const PageWrap = styled.div`
  width: 100%;
  height: fit-content;
  background: ${color.light_gray};
  ${flexCenter}
`;

const BoxFooter = styled.footer`
  display: flex;
  flex-direction: column;
  width: ${(props) => props.widthper};
  min-width: 115rem;
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
      display: flex;
      & > span {
        display: flex;
        color: black;
        margin-right: 2rem;
        cursor: pointer;
        text-decoration: underline;

        .money {
          margin-right: 1rem;
        }
      }
    }

    .sns {
      display: flex;
      a {
        width: 18px;
        margin-left: 2rem;
      }
    }
  }
`;

const GlobalStyle = styled(Global)`
  margin-right: 1rem;
`;
