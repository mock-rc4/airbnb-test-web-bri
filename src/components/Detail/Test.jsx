import React, { useState } from "react";
import axios from "axios";

const Test = () => {
  const [num, setNum] = useState(3);

  const informationApi = async () => {
    try {
      const res = await axios({
        method: "get",
        url: `/app/houses/${num}`,
      });
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <button onClick={informationApi}>테스트버튼</button>
    </>
  );
};

export default Test;
