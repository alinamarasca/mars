import "react-calendar/dist/Calendar.css";
import React, { useContext } from "react";
import Calendar from "react-calendar";
import AppContext from "../context/AppContext";

function ChooseDate() {
  const { date, setDate } = useContext(AppContext);

  const onChange = date => {
    setDate(date.toLocaleDateString("en-GB"));
    console.log(date);
  };

  return (
    <div>
      {" "}
      <Calendar onChange={onChange} value={date} />{" "}
    </div>
  );
}

export default ChooseDate;
