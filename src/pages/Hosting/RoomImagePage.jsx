import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import DetailHeader from "../../components/Hosting/DetailHeader";
import DetailNav from "../../components/Hosting/DetailNav";
import { ReactComponent as Logo } from "../../svg/ic-logo-only.svg";
import { ReactComponent as Pic } from "../../svg/ic-pic.svg";
import { storage } from "../../firebase/fBase";
import {
  ref as sRef,
  uploadBytesResumable,
  getDownloadURL,
  deleteObject,
} from "@firebase/storage";
import { useDispatch } from "react-redux";
import { addImage } from "../../store/actions/addHosting";
import { color, flexCenter } from "../../components/common/styled";
import { useSelector } from "react-redux";

const RoomImagePage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //파일 업로드
  const [file, setFile] = useState("");
  const [previewURL, setPreviewURL] = useState("");

  //유저 index 불러와서 사진 파일이름에 넣어줄 거
  const userInfo = useSelector((state) => state.loginReducer);
  console.log(userInfo);

  //redux 저장 url

  const [percent, setPercent] = useState(0);

  const handleUploadImage = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setFile(file); //여기서 파일데이터가 file state 에 저장됨.
    };

    const uniqueKey = new Date().getTime();
    const newName = file.name;
    // const newName
    const metaData = {
      contentType: file.type,
    };

    const storageRef = sRef(
      storage,
      `${userInfo.userIdx}/` + newName + uniqueKey
    );
    const uploadTask = uploadBytesResumable(storageRef, file, metaData);
    //업로드 관리
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% 됐습니다");
        setPercent(progress);
      },
      (error) => {
        console.log(`업로드 에러남: ${error}`);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadUrl) => {
          dispatch(addImage(downloadUrl));
          setPreviewURL(downloadUrl);
          console.log(`완료 url : ${downloadUrl}`);
        });
      }
    );
  };

  return (
    <WrapperStyle>
      <div className="left-section">
        <div className="back"></div>
        <div className="logo">
          <LogoStyle onClick={() => navigate("/")} />
        </div>
        <video
          src="https://a0.muscache.com/v/d6/12/d6120feb-75fc-52dd-b5bb-5755913fb756/d6120feb75fc52ddb5bb5755913fb756_4000k_1.mp4"
          autoPlay
          muted
        ></video>
        <div className="text">
          <button>▶︎ 동영상 전체 시청하기</button>
          <h1>이제 숙소 사진을 올릴 차례입니다.</h1>
        </div>
      </div>
      <div className="right-section">
        <DetailHeader isdark="false" />
        <main>
          <div className="upload-file-section">
            <Pic />
            <h2>여기로 사진을 끌어다 놓으세요.</h2>
            <p>1장의 사진을 올리세요.</p>
            <label for="input-file">기기에서 업로드</label>
            <input id="input-file" type="file" onChange={handleUploadImage} />
            <div className="image-view">
              {previewURL && <img src={previewURL}></img>}
            </div>
          </div>
        </main>
        <DetailNav
          nextBtnAble="s"
          backPrev="/hosting/floorplan"
          goNext="/hosting/roomname"
        />
      </div>
    </WrapperStyle>
  );
};

export default RoomImagePage;

const WrapperStyle = styled.main`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr;

  & > div {
    width: 100%;
    position: relative;
  }
  .back {
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, transparent 40%, black 120%);
  }

  .left-section {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .logo {
    padding: 5rem;
    position: absolute;
    top: 0;
    z-index: 1;
  }
  .text {
    position: absolute;
    padding: 5rem;
    bottom: 5rem;

    & > button {
      background-color: rgba(0, 0, 0, 0.5);
      color: white;
      border: none;
      border-radius: 2rem;
      padding: 1rem 1.5rem;
      font-size: 1.6rem;
    }
    & > h1 {
      font-size: 4.8rem;
      font-weight: 550;
      color: white;
      word-break: keep-all;
      padding: 3rem 0;
      line-height: 5.5rem;
    }
  }
  main {
    ${flexCenter}
    height:100%;
  }
  .upload-file-section {
    ${flexCenter}
    flex-direction: column;
    width: 50rem;
    height: 45rem;
    border: 1px dashed ${color.medium_gray2};
    position: relative;

    h2 {
      font-size: 2.2rem;
      font-weight: 500;
      padding-top: 2rem;
    }
    p {
      font-size: 1.6rem;
      color: ${color.medium_gray2};
      padding-top: 1rem;
    }
    label {
      position: absolute;
      bottom: 5rem;
      color: ${color.dark_gray2};
      text-decoration: underline;
      font-weight: 600;
      background: white;
      font-size: 1.4rem;
      cursor: pointer;
    }
    input[type="file"] {
      width: 100%;
      height: 100%;
      position: absolute;
      opacity: 0;
      z-index: 5;
    }
    .image-view {
      position: absolute;
      width: 100%;
      height: 100%;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
`;

const LogoStyle = styled(Logo)`
  cursor: pointer;
`;
