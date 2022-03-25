import React, { useState } from "react";
import styled from "styled-components";
import { flexCenter, color, detailButton } from "../common/styled";
import { ReactComponent as Safe } from "../../svg/ic-safepay.svg";
import { ReactComponent as Star } from "../../svg/ic-star.svg";
import { ReactComponent as SuperHost } from "../../svg/ic-superhost-detail.svg";
const HostSection = () => {
  //글자수 제한 함수 만들기
  const [limit, setLimit] = useState(180);
  //임시 텍스트임
  const [text, setText] = useState(
    "안녕하세요. 저는 금융 전문가로 활동하고 있는 재식입니다. 저는 호텔 베딩에 대한 전문 자격을 소지하여, 숙소를 가장 편안하고 청결하게 관리합니다 :) 저는 여러 나라를 여행하는 것을 매우 사랑하고, 새로운 경험을 하는 것을 즐깁니다. 한국을 여행하시는 분들께 최고의 공간과 퀄리티를 보장하는 숙소를 제공하고 싶습니다. 게스트 분들이 깨끗하고 아늑한 공간에서 좋은 시간을 보내신다면 저 또한 행복할 것 같습니다 :) 저희 숙소에 머무는 동안 내 집 같은 편안함을 느끼시고, 사랑스러운 인상 받으실 수 있을 것입니다. 청결한 공간, 사랑스러운 공간, 편리한 공간과 시설이 당신을 기다립니다. Hi. I am “Jae-sik” as a financial expert.. I have a professional qualification in hotel bedding, which makes my accommodation the most comfortable and clean. I love traveling very much and enjoying new experiences. I would like to offer accommodation that guarantees the best space and quality for those traveling in Korea. Would not it be more enjoyable if you spend a good time in a clean and cozy place? During your stay you will be able to enjoy the comfort"
  );

  //function
  const moreView = (str, limit) => {
    return {
      string: str.slice(0, limit),
      isShowMore: str.length > limit,
    };
  };

  const handleClickMore = (str) => () => {
    setLimit(str.length);
  };

  return (
    <WrapperStyle>
      <BoxStyle>
        <div className="title">
          <img src="" alt="호스트 사진" />
          <div>
            <h3>호스트: (호스트이름)님</h3>
            <p>회원 가입일: (회원가입일)</p>
          </div>
        </div>
        <div className="host-content">
          <div className="host-info-left">
            <div className="host-review-section">
              <StarStyle />
              <span>후기 ( )개</span>
              {/* 슈퍼호스트면 보여주자 && 로 */}
              <SuperHostStyle />
              <span>슈퍼호스트</span>
            </div>
            <div className="host-information">
              {moreView(text, limit).string}
              {moreView(text, limit).isShowMore && (
                <span onClick={handleClickMore(text)}>
                  ... <b>더 읽기</b>
                </span>
              )}
            </div>
            {/* 이부분도  슈퍼호스트면 보여주자 && 로 - 위랑 동일*/}
            <div className="is-superhost">
              <p>( )님은 슈퍼호스트입니다.</p>
              <span>
                슈퍼호스트는 풍부한 경험과 높은 평점을 자랑하며 게스트가
                숙소에서 편안히 머무를 수 있도록 최선을 다하는 호스트입니다.
              </span>
            </div>
          </div>
          <div className="host-info-right">
            <p>언어: 中文 (简体), English, 日本語, 한국어</p>
            <p>응답률: ( )%</p>
            <p>응답 시간: 1시간 이내</p>
            <button>호스트에게 연락하기</button>
            <div className="safety-pay">
              <Safe />
              <span>
                안전한 결제를 위해 에어비앤비 웹사이트나 앱 외부에서 송금하거나
                대화를 나누지 마세요.
              </span>
            </div>
          </div>
        </div>
      </BoxStyle>
    </WrapperStyle>
  );
};
export default HostSection;

const WrapperStyle = styled.section`
  width: 100%;
  ${flexCenter};
  border-bottom: 1px solid ${color.medium_gray};
`;

const BoxStyle = styled.div`
  min-width: 110rem;
  width: 80%;
  padding: 5rem 0;
  h3 {
    font-size: 2.2rem;
    font-weight: 500;
    margin-bottom: 1rem;
  }
  .title {
    display: flex;
    align-items: center;

    img {
      border: 1px solid black;
      border-radius: 50%;
      width: 65px;
      height: 65px;
      margin-right: 1rem;
    }
    p {
      font-size: 1.4rem;
      color: ${color.medium_gray2};
    }
  }

  .host-content {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding-top: 3rem;
  }
  .host-info-left {
    padding-right: 10rem;
    color: ${color.dark_gray};
  }
  .host-review-section {
    display: flex;
    font-size: 1.6rem;
    span {
      margin-right: 2rem;
    }
  }
  .host-information {
    padding: 3rem 0;
    font-size: 1.6rem;
    color: ${color.dark_gray};
    line-height: 2.4rem;
    span {
      cursor: pointer;
      b {
        font-weight: 600;
        text-decoration: underline;
        color: ${color.dark_gray2};
      }
    }
  }
  .is-superhost {
    font-size: 1.6rem;
    p {
      font-weight: 550;
      color: ${color.dark_gray2};
      margin-bottom: 1rem;
    }
    span {
      line-height: 2.4rem;
    }
  }

  .host-info-right {
    width: 60%;
    p {
      margin-bottom: 2rem;
      font-size: 1.6rem;
      color: ${color.dark_gray};
    }
    button {
      ${detailButton};
      margin-top: 1rem;
      &:active,
      &:hover {
        text-decoration: none;
      }
    }

    .safety-pay {
      display: flex;
      align-items: center;
      font-size: 1.2rem;
      margin-top: 2rem;
      color: ${color.dark_gray};
      span {
        margin-left: 1.5rem;
        word-break: keep-all;
        line-height: 1.5rem;
      }
    }
  }
`;

const StarStyle = styled(Star)`
  fill: ${color.Main};
  transform: scale(1.2);
  margin-right: 1rem;
`;
const SuperHostStyle = styled(SuperHost)`
  fill: ${color.Main};
  margin-right: 1rem;
`;
