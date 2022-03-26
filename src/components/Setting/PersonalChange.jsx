import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { color, flexCenter, authInput } from "../../components/common/styled";

const PersonalChange = () => {
  //회원 정보 뿌려주는 api 는 여기서 사용함.

  //-------------api----------------
  const [userIndex, setUserIndex] = useState(1);

  //1. 회원정보 불러오는 get api
  useEffect(async () => {
    try {
      const res = await axios({
        baseURL: "http://joon-serverlab.shop/",
        method: "get",
        url: `app/users/${userIndex}`,
        params: { userIdx: userIndex },
      });
      setFirstName(res.data.result.firstName);
      setLastName(res.data.result.lastName);
      setUserBirth(res.data.result.userBirth);
      setUserEmail(res.data.result.userEmail);
    } catch (e) {
      console.log(e);
    }
  }, []);

  //-------------api----------------

  const colors = {
    success: "#222222",
    fail: "rgb(228, 56, 56)",
  };
  const messages = {
    success: "",
    nonfirstname: "이름은 반드시 입력해야 합니다",
    nonlastname: "성은 반드시 입력해야 합니다",
    invalid: "이름에 유효한 글자를 입력하세요",
  };
  const namePattern = /^[가-힣a-zA-Z]+$/;

  //회원정보 저장값
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [userBirth, setUserBirth] = useState("");
  const [userEmail, setUserEmail] = useState("");

  //message 및 색상 결정하는 state
  const [firstNameError, setFirstNameError] = useState({
    message: messages.success,
    color: colors.success,
  });
  const [lastNameError, setLastNameError] = useState({
    message: messages.success,
    color: colors.success,
  });

  const [buttonText, setButtonText] = useState("수정");

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
  const handleCheck = (e) => {
    const {
      target: { name, value },
    } = e;
    if (name === "lastName") {
      setLastName(value);
    } else if (name === "firstName") {
      setFirstName(value);
    }
  };

  const handleClickChange = () => {
    if (buttonText === "수정") setButtonText("취소");
    else if (buttonText === "취소") setButtonText("수정");
  };

  return (
    <ChangeStyle>
      <ChangeBoxStyle>
        <div className="title-text">
          <h2>실명</h2>
          <button onClick={handleClickChange}>{buttonText}</button>
        </div>
        {buttonText === "수정" ? (
          <p>
            {firstName} {lastName}
          </p>
        ) : (
          <div>
            <p>허가증이나 여권 등 여행 서류에 기재되어 있는 이름을 말합니다.</p>
            <div className="input-section">
              <FirstNameInputStyle maincolor={firstNameError.color}>
                <>
                  <span>이름</span>
                  <input
                    name="firstName"
                    type="text"
                    value={firstName}
                    onChange={handleCheck}
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
                    onChange={handleCheck}
                  />
                  <p>{lastNameError.message}</p>
                </>
              </LastNameInputStyle>
            </div>
            <button className="save">저장</button>
          </div>
        )}
      </ChangeBoxStyle>
      <ChangeBoxStyle>
        <div className="title-text">
          <h2>성별</h2>
          <button onClick={handleClickChange}>{buttonText}</button>
        </div>
        {buttonText === "수정" ? (
          <p>지정되지 않음</p>
        ) : (
          <div>
            <div className="input-section"></div>
            <button className="save">저장</button>
          </div>
        )}
      </ChangeBoxStyle>
    </ChangeStyle>
  );
};

export default PersonalChange;

const ChangeStyle = styled.section``;

const ChangeBoxStyle = styled.div`
  padding: 2rem 0;
  border-bottom: 1px solid ${color.medium_gray};
  p {
    font-size: 1.4rem;
    color: ${color.medium_gray2};
    font-weight: 400;
    margin: 0.7rem 0;
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
  .input-section {
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
