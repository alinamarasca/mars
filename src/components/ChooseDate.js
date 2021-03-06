import React, { useContext } from "react";
import Calendar from "react-calendar";
import AppContext from "../context/AppContext";

function ChooseDate() {
  const { date, setDate } = useContext(AppContext);
  const { fetchPhotos } = useContext(AppContext);

  const onChange = date => {
    setDate(date);
  };

  return (
    <div id="calendar" className="calendar">
      <Calendar
        onChange={onChange}
        onClick={e => fetchPhotos(date)}
        value={date}
      />{" "}
    </div>
  );
}

export default ChooseDate;
