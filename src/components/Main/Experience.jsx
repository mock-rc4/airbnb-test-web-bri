import React from "react";
import styled from "styled-components";
import { flexCenter, color, mainTitle, deviceSize } from "../common/styled";

const Experience = () => {
  return (
    <>
      <BoxStyle>
        <div className="experience-box">
          <h2>에어비앤비 체험 둘러보기</h2>
          <div className="experience-cardbox">
            <section>
              <img src="https://a0.muscache.com/im/pictures/c2adcb16-6c3f-4041-86a1-afa9c303c500.jpg?im_w=960" />
              <div className="enjoy">
                <p>
                  여행 중 만나는<br></br>이색적인 즐길거리
                </p>
                <button>체험</button>
              </div>
            </section>
            <section>
              <img src="https://a0.muscache.com/im/pictures/c1bdf53f-2a19-4529-aa9b-1b0e6bd8d0ee.jpg?im_w=960" />
              <div className="enjoy">
                <p>
                  집에서 만나는<br></br>이색적인 즐길거리
                </p>
                <button>온라인 체험</button>
              </div>
            </section>
          </div>
        </div>
      </BoxStyle>
    </>
  );
};

export default Experience;

const BoxStyle = styled.section`
  width: 100%;
  padding: 9.6rem 0;
  ${flexCenter}

  .experience-box {
    width: 90%;

    h2 {
      ${mainTitle}

      @media ${deviceSize.tablet} {
        font-size: 3.1rem;
      }
      @media ${deviceSize.mobile} {
        font-size: 2.8rem;
      }
    }

    .experience-cardbox {
      width: 100%;
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 2rem;
      box-sizing: border-box;
      section {
        position: relative;
        width: 100%;
        box-sizing: border-box;
      }

      img {
        width: 100%;
        border-radius: 1.3rem;
        box-sizing: border-box;
      }

      .enjoy {
        position: absolute;
        top: 0;
        padding: 5rem 4rem;

        p {
          top: 0;
          color: white;
          font-size: 4.1rem;
          font-weight: 500;
          padding-bottom: 3rem;
          word-break: keep-all;
        }
        button {
          background: white;
          border: none;
          border-radius: 0.8rem;
          padding: 1.5rem 2.5rem;
          font-size: 1.6rem;
          font-weight: 450;
          cursor: pointer;
          &:hover {
            background: ${color.medium_gray};
          }
        }
      }
    }
  }
`;
