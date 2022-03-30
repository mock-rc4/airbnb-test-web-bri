//체크인 시간 props 로 넘겨야함
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { flexCenter, color } from "../common/styled";

const NoticeSection = ({ checkin, checkout }) => {
  const [notices, setNotices] = useState([]);
  const houseInfo = useSelector((state) => state.storeHouseIdxReducer);

  useEffect(() => {
    rulesInformationApi();
  }, []);

  const rulesInformationApi = async () => {
    try {
      const res = await axios({
        baseURL: "http://joon-serverlab.shop/",
        method: "get",
        url: `app/houses/show/rules/${houseInfo.houseIdx}`,
      });
      setNotices(res.data.result);
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <WrapperStyle>
      <BoxStyle>
        <h3>알아두어야 할 사항</h3>
        <div className="notice-content">
          <div>
            <p className="title">숙소 이용규칙</p>
            <div className="content">
              <p>체크인: 오후 3:00 - 오전 2:00</p>
              <p>체크아웃 시간: 오전 11:00</p>
              <p>열쇠 보관함(으)로 셀프 체크인</p>
              <p>유아(만 2세 미만)에게 적합하지 않음</p>
              {notices &&
                notices.map((item, index) => (
                  <p key={index}>{item.optionName}</p>
                ))}
            </div>
          </div>
          <div>
            <p className="title">건강과 안전</p>
            <div className="content">
              <p>열쇠 보관함(으)로 셀프 체크인</p>
              <p>에어비앤비의 강화된 청소 절차 준수에 동의했습니다.</p>
              <p>
                에어비앤비의 사회적 거리 두기 및 관련 가이드라인이 적용됩니다.
              </p>
              <p>일산화탄소 경보기</p>
              <p>화재경보기</p>
            </div>
          </div>
          <div>
            <p className="title">환불 정책</p>
            <div className="content">
              <p>
                이 숙박에 대한 취소 세부 내역을 확인하려면 여행 날짜를
                입력하세요.
              </p>
            </div>
          </div>
        </div>
      </BoxStyle>
    </WrapperStyle>
  );
};

export default NoticeSection;

const WrapperStyle = styled.section`
  width: 100%;
  ${flexCenter};
`;

const BoxStyle = styled.div`
  min-width: 110rem;
  width: 80%;
  padding: 5rem 0;
  h3 {
    font-size: 2.2rem;
    font-weight: 500;
    margin-bottom: 3rem;
  }

  .notice-content {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 5rem;

    .title {
      font-size: 1.6rem;
      font-weight: 450;
      padding-bottom: 1.5rem;
    }

    .content {
      font-size: 1.6rem;
      line-height: 2.1rem;
      color: ${color.dark_gray};
      p {
        display: flex;
        margin-bottom: 8px;
        word-break: keep-all;
        &::before {
          content: "•";
          margin-right: 1rem;
        }
      }
    }
  }
`;
