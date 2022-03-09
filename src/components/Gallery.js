import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import photoCard from "./photoCard";
import AppContext from "../context/AppContext";

function Gallery() {
  const [photoData, setPhotoData] = useState([]);
  const { date, setDate } = useContext(AppContext);

  useEffect(() => {
    console.log(date.toISOString().split("T")[0]);
    fetchPhotos(`${date.toISOString().split("T")[0]}`);
    fetchPhotos("2022-03-03");

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
  }, []);

  if (!photoData) return <div />;

  return (
    <div className="mars-photo">
      {console.log("fetch-o", photoData)}
      {photoData.map(photo => {
        return photoCard(photo);
      })}
    </div>
  );
}

export default Gallery;
