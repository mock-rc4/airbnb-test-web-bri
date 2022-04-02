import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { color, flexCenter, authInput } from "../../components/common/styled";
import { useSelector } from "react-redux";

const PersonalChange = () => {
  //회원 정보 뿌려주는 api 는 여기서 사용함
  const userInfo = useSelector((state) => state.loginReducer);
  const [userIndex, setUserIndex] = useState(userInfo.userIdx);
  const jwt = localStorage.getItem("jwt");

  //회원정보 저장값
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [userBirth, setUserBirth] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userGender, setUserGender] = useState("");

  const [btnNameText, setBtnNameText] = useState("수정");
  const [btnGenderText, setBtnGenderText] = useState("수정");
  const [btnBirthText, setBtnBirthText] = useState("수정");
  const [btnEmailText, setBtnEmailText] = useState("수정");

  const colors = {
    success: "#999999",
    fail: "rgb(228, 56, 56)",
  };
  const messages = {
    success: "",
    nonfirstname: "이름은 반드시 입력해야 합니다",
    nonlastname: "성은 반드시 입력해야 합니다",
    invalid: "이름에 유효한 글자를 입력하세요",
  };
  const namePattern = /^[가-힣a-zA-Z]+$/;

  //message 및 색상 결정하는 state
  const [firstNameError, setFirstNameError] = useState({
    message: messages.success,
    color: colors.success,
  });
  const [lastNameError, setLastNameError] = useState({
    message: messages.success,
    color: colors.success,
  });
  //-------------api----------------

  //1. 회원정보 불러오는 get api
  useEffect(async () => {
    try {
      const res = await axios.get(
        `http://joon-serverlab.shop/app/users/${userIndex}`,
        {
          params: { userIdx: userIndex },
        }
      );
      setFirstName(res.data.result.firstName);
      setLastName(res.data.result.lastName);
      setUserBirth(res.data.result.userBirth);
      setUserGender(res.data.result.userGender);
      setUserEmail(res.data.result.userEmail);
    } catch (e) {
      console.log(e);
    }
  }, []);

  //2. 성별 patch
  const handleChangeGender = async () => {
    try {
      const res = await axios({
        baseURL: "http://joon-serverlab.shop/",
        method: "patch",
        url: `app/users/gender-change/${userIndex}`,
        data: {
          userIdx: userIndex,
          userGender: userGender,
        },
        headers: {
          "X-ACCESS-TOKEN": jwt,
        },
      });
    } catch (e) {
      console.log(e);
    }
  };
  //3. 생년월일 변경
  const handleChangeBirth = async () => {
    try {
      const res = await axios({
        baseURL: "http://joon-serverlab.shop/",
        method: "patch",
        url: `app/users/birth-change/${userIndex}`,
        data: {
          userBirth: userBirth,
        },
        headers: {
          "X-ACCESS-TOKEN": jwt,
        },
      });
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  };
  //4. 이름 변경
  const handleChangeName = async () => {
    try {
      const res = await axios({
        baseURL: "http://joon-serverlab.shop/",
        method: "patch",
        url: `app/users/name-change/${userIndex}`,
        data: {
          lastName: lastName,
          firstName: firstName,
        },
        headers: {
          "X-ACCESS-TOKEN": jwt,
        },
      });
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  };
  //-------------api----------------

  //생명주기
  //이 안에서 유효성 검사
  useEffect(() => {
    if (firstName.length === 0) {
      setFirstNameError({
        message: messages.nonfirstname,
        color: colors.fail,
      });
    } else if (!namePattern.test(firstName)) {
      setFirstNameError({ message: messages.invalid, color: colors.fail });
    } else {
      setFirstNameError({ message: messages.success, color: colors.success });
    }

    if (lastName.length === 0) {
      setLastNameError({
        message: messages.nonlastname,
        color: colors.fail,
      });
    } else if (!namePattern.test(lastName)) {
      setLastNameError({ message: messages.invalid, color: colors.fail });
    } else {
      setLastNameError({ message: messages.success, color: colors.success });
    }
  }, [firstName, lastName]);

  //유효성 검사랑 입력 값 받는 함수 같이 있음. 변할 때마다 둘 다 같이 해줘야해서
  const handleChange = (e) => {
    const {
      target: { name, value },
    } = e;
    if (name === "lastName") {
      setLastName(value);
    } else if (name === "firstName") {
      setFirstName(value);
    } else if (name === "gender") {
      setUserGender(value);
    } else if (name === "birth") {
      setUserBirth(value);
    } else if (name === "email") {
      setUserEmail(value);
    }
  };

  const handleClickChange = (e) => {
    const {
      target: { name, value },
    } = e;
    switch (name) {
      case "name":
        if (btnNameText === "수정") setBtnNameText("취소");
        else setBtnNameText("수정");
        break;
      case "gender":
        if (btnGenderText === "수정") setBtnGenderText("취소");
        else setBtnGenderText("수정");
        break;
      case "birth":
        if (btnBirthText === "수정") setBtnBirthText("취소");
        else setBtnBirthText("수정");
        break;
      case "email":
        if (btnEmailText === "수정") setBtnEmailText("취소");
        else setBtnEmailText("수정");
        break;
      default:
        break;
    }
  };

  return (
    <ChangeStyle>
      <ChangeBoxStyle>
        <div className="title-text">
          <h2>실명</h2>
          <button name="name" onClick={handleClickChange}>
            {btnNameText}
          </button>
        </div>
        {btnNameText === "수정" ? (
          <p>
            {firstName} {lastName}
          </p>
        ) : (
          <div>
            <p>허가증이나 여권 등 여행 서류에 기재되어 있는 이름을 말합니다.</p>
            <div className="name-input-section">
              <FirstNameInputStyle maincolor={firstNameError.color}>
                <>
                  <span>이름</span>
                  <input
                    name="firstName"
                    type="text"
                    value={firstName}
                    onChange={handleChange}
                  />
                  <p>{firstNameError.message}</p>
                </>
              </FirstNameInputStyle>
              <LastNameInputStyle maincolor={lastNameError.color}>
                <>
                  <span>성</span>
                  <input
                    name="lastName"
                    type="text"
                    value={lastName}
                    onChange={handleChange}
                  />
                  <p>{lastNameError.message}</p>
                </>
              </LastNameInputStyle>
            </div>
            <button className="save" onClick={handleChangeName}>
              저장
            </button>
          </div>
        )}
      </ChangeBoxStyle>
      <ChangeBoxStyle>
        <div className="title-text">
          <h2>성별</h2>
          <button name="gender" onClick={handleClickChange}>
            {btnGenderText}
          </button>
        </div>
        {btnGenderText === "수정" ? (
          <p>{userGender ? `${userGender}` : "지정되지 않음"}</p>
        ) : (
          <div>
            <span>성별</span>
            <GenderInputStyle name="gender" onChange={handleChange}>
              <option value=""></option>
              <option key="남자" value="남자">
                남자
              </option>
              <option key="여자" value="여자">
                여자
              </option>
              <option key="기타" value="기타">
                기타
              </option>
            </GenderInputStyle>
            <button className="save" onClick={handleChangeGender}>
              저장
            </button>
          </div>
        )}
      </ChangeBoxStyle>
      <ChangeBoxStyle>
        <div className="title-text">
          <h2>생년월일</h2>
          <button name="birth" onClick={handleClickChange}>
            {btnBirthText}
          </button>
        </div>
        {btnBirthText === "수정" ? (
          <p>{userBirth}</p>
        ) : (
          <div>
            <span>생년월일</span>
            <BirthInputStyle
              type="date"
              value={userBirth}
              name="birth"
              onChange={handleChange}
            />
            <button className="save" onClick={handleChangeBirth}>
              저장
            </button>
          </div>
        )}
      </ChangeBoxStyle>
      <ChangeBoxStyle>
        <div className="title-text">
          <h2>이메일 주소</h2>
          <button name="email" onClick={handleClickChange}>
            {btnEmailText}
          </button>
        </div>
        {btnEmailText === "수정" ? (
          <p>{userEmail}</p>
        ) : (
          <div>
            <span>이메일</span>
            <EmailInputStyle
              value={userEmail}
              name="email"
              onChange={handleChange}
            />
            <button className="save">저장</button>
          </div>
        )}
      </ChangeBoxStyle>
      <ChangeBoxStyle>
        <div className="title-text">
          <h2>전화번호</h2>
          <button name="gender">{btnGenderText}</button>
        </div>
        <p>
          예약이 확정된 게스트와 에어비앤비가 연락할 수 있는 전화번호를
          입력하세요. 다른 전화번호를 추가하고 어떻게 사용할지 설정할 수
          있습니다.
        </p>
      </ChangeBoxStyle>
      <ChangeBoxStyle>
        <div className="title-text">
          <h2>정부발급 신분증</h2>
          <button name="gender">{btnGenderText}</button>
        </div>
        <p>제공되지 않음</p>
      </ChangeBoxStyle>
      <ChangeBoxStyle>
        <div className="title-text">
          <h2>주소</h2>
          <button name="gender">{btnGenderText}</button>
        </div>
        <p>제공되지 않음</p>
      </ChangeBoxStyle>
      <ChangeBoxStyle>
        <div className="title-text">
          <h2>비상 연락처</h2>
          <button name="gender">{btnGenderText}</button>
        </div>
        <p>제공되지 않음</p>
      </ChangeBoxStyle>
      <ChangeBoxStyle>
        <div className="title-text">
          <h2>중국 여행에 필요한 여권 정보</h2>
          <button name="gender">{btnGenderText}</button>
        </div>
        <p>제공되지 않음</p>
      </ChangeBoxStyle>
    </ChangeStyle>
  );
};

export default PersonalChange;

const ChangeStyle = styled.section``;

const ChangeBoxStyle = styled.div`
  padding: 1.7rem 0;
  position: relative;
  border-bottom: 1px solid ${color.medium_gray};
  p {
    font-size: 1.4rem;
    color: ${color.medium_gray2};
    font-weight: 400;
    margin: 0.7rem 0;
    line-height: 1.8rem;
    width: 90%;
  }

  .title-text {
    display: flex;
    justify-content: space-between;
    align-items: center;

    & > h2 {
      font-size: 1.6rem;
      font-weight: 400;
      color: ${color.dark_gray};
      margin: 0;
      margin-top: 1rem;
    }

    button {
      background: white;
      border: none;
      text-decoration: underline;
      font-size: 1.4rem;
      font-weight: 500;
      cursor: pointer;
    }
  }
  .name-input-section {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;
  }

  .save {
    padding: 1.5rem 2.5rem;
    color: white;
    background: black;
    border: none;
    border-radius: 1rem;
    font-size: 1.6rem;
    cursor: pointer;
    margin-top: 3rem;
  }

  span {
    position: absolute;
    color: #999999;
    font-size: 1.2rem;
    font-weight: 700;
    left: 1rem;
    top: 6.6rem;
    z-index: 1;
  }
`;

const FirstNameInputStyle = styled.div`
  position: relative;
  input {
    ${authInput};
    border: 1px solid ${(props) => props.maincolor};
    &:focus {
      outline: 1.5px solid ${(props) => props.maincolor};
    }
  }
  p {
    margin-top: 1rem;
    margin-bottom: 2rem;
    font-size: 1.2rem;
    color: ${(props) => props.maincolor};
    position: absolute;
    bottom: -4rem;
  }
  span {
    position: absolute;
    color: ${(props) => props.maincolor};
    font-size: 1.2rem;
    font-weight: 700;
    left: 1rem;
    top: 1rem;
  }
`;

const LastNameInputStyle = styled(FirstNameInputStyle)``;

const GenderInputStyle = styled.select`
  position: relative;
  ${authInput};
  width: 100%;
  margin-top: 1rem;
  span {
    position: absolute;
    color: ${(props) => props.maincolor};
    font-size: 1.2rem;
    font-weight: 700;
    left: 1rem;
    top: 1rem;
  }
`;

const BirthInputStyle = styled.input`
  position: relative;
  ${authInput};
  width: 100%;
  margin-top: 1rem;
`;

const EmailInputStyle = styled(BirthInputStyle)``;
