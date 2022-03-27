import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import DetailHeader from "../../components/Hosting/DetailHeader";
import DetailNav from "../../components/Hosting/DetailNav";
import { ReactComponent as Logo } from "../../svg/ic-logo-only.svg";
import { storage } from "../../firebase/fBase";
import {
  ref as sRef,
  uploadBytesResumable,
  getDownloadURL,
  deleteObject,
} from "@firebase/storage";
import { useDispatch } from "react-redux";
import { addImage } from "../../store/actions/addHosting";

const RoomImagePage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //파일 업로드
  const [file, setFile] = useState("");
  const [previewURL, setPreviewURL] = useState("");
  const [preview, setPreview] = useState(null);
  const fileRef = useRef();
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

    const storageRef = sRef(storage, "Images/" + newName + uniqueKey);
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
          console.log(`완료 url : ${downloadUrl}`);
        });
      }
    );
  };

  useEffect(() => {
    console.log(percent);
  }, [percent]);

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
          <input type="file" onChange={handleUploadImage} />
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
`;

const LogoStyle = styled(Logo)`
  cursor: pointer;
`;
