import React, { useContext } from "react";
import Calendar from "react-calendar";
import AppContext from "../context/AppContext";
import axios from "axios";

function ChooseDate() {
  const { date, setDate } = useContext(AppContext);
  const { setPhotoData } = useContext(AppContext);

  const onChange = date => {
    setDate(date);
  };
  // fetch photos
  async function fetchPhotos(usersDate) {
    axios
      .get(
        `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${usersDate}&page=1&api_key=9AcqhEqCIwq8of63KQPm53MbRUhOTnA3uquqcSxl`
      )
      .then(res => setPhotoData(res.data.photos))
      .catch(err => {
        console.log(err);
      });
  }

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
