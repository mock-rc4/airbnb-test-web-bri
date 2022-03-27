import React from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import Footer from "../../components/common/Footer/Footer";
import Header from "../../components/common/Header/Header";
import { color, flexCenter } from "../../components/common/styled";
import PersonalContent from "../../components/Setting/PersonalContent";
import { ReactComponent as RightArrow } from "../../svg/ic-rightarrow.svg";

const PersonalPage = () => {
  const navigate = useNavigate();
  return (
    <WrapperStyle>
      <Header
        isfix="true"
        boxshadow="0rem 0.1rem 0.5rem 0.1rem"
        widthper="90%"
        position="sticky"
        minwidth=""
      />
      <main>
        <div className="title-section">
          <div className="navigator">
            <span onClick={() => navigate("/setting")}>계정</span>
            <RightArrowStyle />
            <span>개인정보</span>
          </div>
          <h2>개인정보</h2>
        </div>
        <ContentStyle>
          <PersonalContent />
        </ContentStyle>
      </main>
      <Footer widthper="90%" />
    </WrapperStyle>
  );
};

export default PersonalPage;

const WrapperStyle = styled.div`
  width: 100%;

  main {
    ${flexCenter}
    flex-direction:column;
    padding: 4rem 0;
  }
  .title-section {
    min-width: 105rem;
    width: 73%;

    .navigator {
      display: flex;
      font-size: 1.4rem;
      color: ${color.dark_gray};
      font-weight: 500;
      span:nth-child(1) {
        cursor: pointer;
        &:hover {
          text-decoration: underline;
        }
      }
    }

    & > h2 {
      font-size: 3.2rem;
      font-weight: 700;
      color: ${color.dark_gray};
      margin: 1.8rem 0;
    }
  }
`;

const ContentStyle = styled.section`
  min-width: 105rem;
  width: 73%;
`;

const RightArrowStyle = styled(RightArrow)`
  margin: 0 1rem;
`;
