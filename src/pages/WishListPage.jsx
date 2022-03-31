import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../components/common/Header/Header";
import Footer from "../components/common/Footer/Footer";
import { flexCenter } from "../components/common/styled";
import WishItem from "../components/WishList/WishItem";
import { useSelector } from "react-redux";
import axios from "axios";
const WishListPage = () => {
  const [items, setItems] = useState([]);
  const userInfo = useSelector((state) => state.loginReducer);

  useEffect(() => {
    wishInformationApi();
  }, []);

  const wishInformationApi = async () => {
    try {
      const res = await axios({
        baseURL: "http://joon-serverlab.shop/",
        method: "get",
        url: `app/houses/wish-list/${userInfo.userIdx}`,
      });
      setItems(res.data.result);
    } catch (e) {
      console.log(e);
    }
  };
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
        <div className="main-section">
          <h1>위시리스트</h1>
          <div className="wish-item-section">
            {items.map((item, index) => (
              <WishItem
                key={index}
                wishIdx={item.wishIdx}
                gu={item.gu}
                houseBath={item.houseBath}
                houseBed={item.houseBed}
                houseGuest={item.houseGuest}
                houseIdx={item.houseIdx}
                houseImg={item.houseImg}
                houseName={item.houseName}
                housePrice={item.housePrice}
                houseRoom={item.houseRoom}
              />
            ))}
          </div>
        </div>
      </main>
      <Footer widthper="90%" />
    </WrapperStyle>
  );
};
export default WishListPage;

const WrapperStyle = styled.div`
  width: 100%;
  main {
    ${flexCenter}
  }
  .main-section {
    width: 90%;
    padding: 3rem 0;

    h1 {
      font-size: 3.2rem;
      margin: 2.5rem 0 2.5rem;
      font-weight: 700;
    }
    .wish-item-section {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-column-gap: 3rem;
      grid-row-gap: 5rem;
      margin: 4rem 0;
    }
  }
`;
