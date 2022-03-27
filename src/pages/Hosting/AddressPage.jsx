import React, { useState } from "react";
import styled from "styled-components";
import { flexCenter, authInput, color } from "../../components/common/styled";
import DetailHeader from "../../components/Hosting/DetailHeader";
import DetailNav from "../../components/Hosting/DetailNav";
import LeftSection from "../../components/Hosting/LeftSection";
import SearchMap from "../../components/Search/SearchMap";
import { ReactComponent as Location } from "../../svg/ic-location.svg";
import { ReactComponent as Back } from "../../svg/ic-back.svg";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addAddress } from "../../store/actions/addHosting";
import { useSelector } from "react-redux";

const AddressPage = () => {
  const data = useSelector((state) => state.addHostingReducer);
  console.log(data);
  //리덕스 수정
  const dispatch = useDispatch();

  // 주소 입력창 열고 닫고 하는 state
  const [writeAddr, setWriteAddr] = useState(false);

  //버튼 활성화 state
  const [btnAble, setBtnAble] = useState("");

  //post 할 state 들
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [gu, setGu] = useState("");
  const [apt, setApt] = useState("");
  const [post, setPost] = useState("");

  const handleClickBtn = () => {
    setWriteAddr(!writeAddr);
  };

  const handleInputValue = (e) => {
    const {
      target: { name, value },
    } = e;
    if (name === "country") setCountry(value);
    else if (name === "city") setCity(value);
    else if (name === "gu") setGu(value);
    else if (name === "apt") setApt(value);
    else if (name === "post") setPost(value);
  };

  //-----------api---------------
  //post : 주소 전송

  const handleClickAddress = async () => {
    try {
      const res = await axios({
        baseURL: "http://joon-serverlab.shop/",
        method: "post",
        url: `app/houses/hosting/address`,
        data: {
          country: country,
          city: city,
          gu: gu,
          apt: apt,
          post: post,
        },
      });
      //여기서 리덕스에 결과 인덱스 값 넣어주기
      console.log(res);
      if (res.data.isSuccess) {
        dispatch(addAddress(res.data.result.addressIdx));
        setBtnAble("anysentence");
      }
    } catch (e) {
      console.log(e);
    }
  };

  //참고 : return 값으로 쓸 것 : res.data.result.addressIdx 값 리덕스에 저장해주기

  //-----------api---------------

  return (
    <WrapperStyle>
      <LeftSection title="숙소 위치는 어디인가요?" />
      <div className="right-section">
        <DetailHeader isdark="true" />
        <div className="content">
          <SearchMap />
          <div className="search-address">
            {!writeAddr && (
              <button onClick={handleClickBtn}>
                <LocaitonStyle />
                <span>주소를 입력하세요.</span>
              </button>
            )}
            {writeAddr && (
              <div className="addr-form">
                <h3>주소 확인</h3>
                <div className="back-icon" onClick={handleClickBtn}>
                  <Back />
                </div>
                <section>
                  <EmailInputStyle>
                    <p>국가</p>
                    <input
                      name="country"
                      type="text"
                      onChange={handleInputValue}
                    />
                  </EmailInputStyle>
                  <EmailInputStyle>
                    <p>도시</p>
                    <input
                      name="city"
                      type="text"
                      onChange={handleInputValue}
                    />
                  </EmailInputStyle>
                  <EmailInputStyle>
                    <p>구</p>
                    <input name="gu" type="text" onChange={handleInputValue} />
                  </EmailInputStyle>
                  <EmailInputStyle>
                    <p>아파트 이름, 동호수(선택사항)</p>
                    <input name="apt" type="text" onChange={handleInputValue} />
                  </EmailInputStyle>
                  <EmailInputStyle>
                    <p>우편번호</p>
                    <input
                      name="post"
                      type="text"
                      onChange={handleInputValue}
                    />
                  </EmailInputStyle>
                </section>
                <button onClick={handleClickAddress}>확인</button>
                {/* 이 버튼 누르면 post */}
              </div>
            )}
          </div>
        </div>
        <DetailNav
          nextBtnAble={btnAble}
          backPrev="/hosting/privacy"
          goNext="/hosting/floorplan"
        />
      </div>
    </WrapperStyle>
  );
};

export default AddressPage;

const WrapperStyle = styled.main`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr;

  & > div {
    width: 100%;
    position: relative;
    overflow: hidden;
  }

  .content {
    //지도임
    & > section {
      position: absolute;
      transform: scale(1.5);
    }
  }
  .search-address {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 30;
    display: flex;
    justify-content: center;
    & > button {
      display: flex;
      align-items: center;
      position: absolute;
      top: 25%;
      width: 80%;
      height: 10%;
      background: white;
      border: none;
      border-radius: 5rem;
      box-shadow: 0px 3px 20px 3px #cccccc;
      text-align: start;
      font-size: 1.6rem;
      font-weight: 600;
      cursor: pointer;
      span {
        color: ${color.dark_gray};
        margin-left: 1rem;
      }
    }
  }
  .addr-form {
    box-sizing: border-box;
    padding: 2rem 2.5rem;
    position: absolute;
    background: white;
    top: 13%;
    width: 80%;
    height: 70%;
    border-radius: 2rem;
    box-shadow: 0px 3px 20px 3px #cccccc;

    h3 {
      font-size: 1.9rem;
      font-weight: 450;
      text-align: center;
      margin-bottom: 3rem;
      color: ${color.dark_gray2};
      padding: 1rem 0;
    }
    .back-icon {
      position: absolute;
      top: 2rem;
      left: 1.6rem;
      padding: 0.5rem;
      &:hover {
        background: ${color.light_gray};
        border-radius: 50%;
      }
    }
    section {
      display: flex;
      flex-direction: column;
      border: 1px solid ${color.medium_gray2};
      border-radius: 1rem;
      overflow: hidden;

      div:nth-child(5) {
        input {
          border: none;
        }
      }
    }
    button {
      background: black;
      border: none;
      border-radius: 1rem;
      padding: 1.5rem 2.5rem;
      color: white;
      font-size: 1.6rem;
      margin-top: 6.5rem;
      cursor: pointer;
    }
  }
`;
const LocaitonStyle = styled(Location)`
  margin: 2.5rem;
`;

const EmailInputStyle = styled.div`
  position: relative;
  input {
    ${authInput};
    border: none;
    border-bottom: 1px solid ${color.medium_gray2};
    border-radius: 0;
  }
  p {
    position: absolute;
    font-size: 1.2rem;
    font-weight: 500;
    left: 1rem;
    top: 25%;
    transform: translateY(-50%);
  }
`;
