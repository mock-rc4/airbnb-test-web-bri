import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import { DayPickerRangeController } from "react-dates";
import moment from "moment";
import "moment/locale/ko";
import { addCheckIn, addCheckOut } from "../../store/actions/searchHouse";

const Calender = () => {
  moment.locale("ko");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const handleDatesChange = ({ startDate, endDate }) => {
    setStartDate(startDate);
    setEndDate(endDate);
  };
  const [focusedInput, setFocusedInput] = useState("startDate");

  //리덕스 값 저장
  const dispatch = useDispatch();
  const [checkin, setCheckin] = useState("");
  const [checkout, setCheckout] = useState("");

  useEffect(() => {
    if (startDate) dispatch(addCheckIn(startDate.format(`YYYY-MM-DD`)));
    if (endDate) dispatch(addCheckOut(endDate.format(`YYYY-MM-DD`)));
  }, [startDate, endDate]);

  return (
    <>
      <DayPickerRangeController
        numberOfMonths={2}
        startDate={startDate}
        endDate={endDate}
        onDatesChange={handleDatesChange}
        focusedInput={focusedInput}
        onFocusChange={(focusedInput) => setFocusedInput(focusedInput)}
      ></DayPickerRangeController>
    </>
  );
};
export default Calender;

const PP = styled.input`
  font-size: 5rem;
`;

{
  /* <PP value={startDate ? startDate.format(`MM월 DD일`) : "ddd"} />
<PP value={endDate ? endDate.format(`MM월 DD일`) : "ddd"} /> */
}
