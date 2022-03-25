import axios from "axios";
import React, { useEffect } from "react";
import styled from "styled-components";
import { color, flexCenter } from "../common/styled";
import DetailInfoSection from "./DetailInfoSection";
import DetailTitleSection from "./DetailTitleSection";

const DetailContent = ({ contentRef }) => {
  //props 로 houseindex 를 넘겨받아야함 그리고 그거 useState 에 저장하고 밑에 넣어줘야함

  // useEffect(async () => {
  //   try {
  //     const res = await axios({
  //       baseURL: "http://joon-serverlab.shop/",
  //       method: "get",
  //       url: "app/houses/:houseIdx",
  //     });
  //     console.log(res);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // }, []);

  return (
    <WrapperStyle ref={(el) => (contentRef.current[1] = el)}>
      <BoxStyle>
        <DetailInfoSection />
      </BoxStyle>
    </WrapperStyle>
  );
};

export default DetailContent;

const WrapperStyle = styled.main`
  width: 100%;
  ${flexCenter};
`;

const BoxStyle = styled.div`
  min-width: 110rem;
  width: 80%;
`;
