import { useState } from "react";
import axios from "axios";

export const UseApi = (method, url, data) => {
  const [responseData, setResponseData] = useState([]);
  const fetchApi = async () => {
    try {
      const res = await axios({
        baseURL: "http://joon-serverlab.shop/",
        method: method,
        url: url,
        data: {
          data,
        },
      });
      setResponseData(res);
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  };

  return { responseData, fetchApi };
};

export default UseApi;
