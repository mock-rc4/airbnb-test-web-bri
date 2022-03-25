import React, { useState } from "react";
import styled from "styled-components";
import { color, detailButton } from "../common/styled";
import { ReactComponent as SelfCheckin } from "../../svg/ic-self-checkin.svg";
import { ReactComponent as SuperHost } from "../../svg/ic-superhost.svg";
import { ReactComponent as Calender } from "../../svg/ic-calender.svg";

const InformationBox = () => {
  const [date, setDate] = useState(new Date());

  return (
    <WrapperStyle>
      <section className="room-title">
        <div>
          <h3>( )님이 호스팅하는 (종류) (범위)</h3>
          <p>최대 인원 ( )명 • 원룸 • 침대 ( )개 • 욕실 ( )개</p>
        </div>
        <div>
          <img src="" alt="호스트 사진" />
        </div>
      </section>
      <section className="room-information">
        <div>
          <SelfCheckin className="icon" />
          <div className="room-info-text">
            <p>셀프 체크인</p>
            <p>열쇠 보관함을 이용해 체크인하세요.</p>
          </div>
        </div>
        {/* 슈퍼호스트 유무에 따라 넣을 문구 */}
        <div className="is-superhost">
          <SuperHost className="icon" />
          <div className="room-info-text">
            <p>( )님은 ( )입니다.</p>
            <p>
              슈퍼호스트는 풍부한 경험과 높은 평점을 자랑하며 게스트가 숙소에서
              편안히 머무를 수 있도록 최선을 다하는 호스트입니다.
            </p>
          </div>
        </div>
        <div>
          <Calender className="icon" />
          <div className="room-info-text">
            <p>
              {date.getMonth() + 2}월 {date.getDate()}일 전까지 무료 취소 가능
            </p>
          </div>
        </div>
      </section>
      <section className="room-content">(숙소 설명)</section>
      <section className="room-location">
        <h3>숙박 장소</h3>
        <div>내용</div>
      </section>
      <section className="room-facilities">
        <h3>숙박 편의시설</h3>
        <div className="facilities">
          <div className="facility">편의시설 내용 map으로 뿌려줄거임</div>
          <div className="facility">편의시설 내용 map으로 뿌려줄거임</div>
          <div className="facility">편의시설 내용 map으로 뿌려줄거임</div>
          <div className="facility">편의시설 내용 map으로 뿌려줄거임</div>
          <div className="facility">편의시설 내용 map으로 뿌려줄거임</div>
          <div className="facility">편의시설 내용 map으로 뿌려줄거임</div>
        </div>
        <button>편의시설 모두 보기</button>
      </section>
      <section className="calender">
        <h3>( )에서 ( )박</h3>
      </section>
    </WrapperStyle>
  );
};

export default InformationBox;
const WrapperStyle = styled.div`
  width: 100%;
  padding-right: 5rem;

  h3 {
    font-size: 2.2rem;
    font-weight: 500;
    padding-bottom: 2rem;
  }

  .room-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    line-height: 3rem;

    padding-bottom: 2rem;
    border-bottom: 1px solid ${color.medium_gray};
    h3 {
      padding-bottom: 0;
    }
    p {
      font-size: 1.6rem;
      word-break: keep-all;
    }
  }

  .room-information {
    padding: 3rem 0;
    border-bottom: 1px solid ${color.medium_gray};

    & > div {
      display: flex;

      .icon {
        margin-right: 1rem;
      }
    }

    .room-info-text {
      p:nth-child(1) {
        font-size: 1.6rem;
        font-weight: 500;
        margin-bottom: 5px;
        line-height: 2rem;
        color: ${color.dark_gray2};
      }
      p:nth-child(2) {
        font-size: 1.4rem;
        font-weight: 500;
        margin-bottom: 5px;
        line-height: 2rem;
        color: ${color.medium_gray2};
        margin-bottom: 2rem;
      }
    }
  }

  .room-content {
    padding: 3rem 0;
    border-bottom: 1px solid ${color.medium_gray};
    font-size: 1.6rem;
  }

  .room-location {
    padding: 4rem 0;
    border-bottom: 1px solid ${color.medium_gray};

    & > div {
      width: 30%;
      height: auto;
      border: 1px solid ${color.medium_gray};
      border-radius: 1rem;
      padding: 2rem;
    }
  }

  .room-facilities {
    font-size: 16px;
    padding: 4rem 0;
    border-bottom: 1px solid ${color.medium_gray};

    .facilities {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 2rem;
    }
    button {
      ${detailButton};
    }
  }

  .calender {
    padding: 4rem 0;
  }
`;
