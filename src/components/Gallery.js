import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import photoCard from "./photoCard";
import AppContext from "../context/AppContext";

function Gallery() {
  const [photoData, setPhotoData] = useState([]);
  const { date } = useContext(AppContext);
  const { isOpen, setIsOpen } = useContext(AppContext);
  const { img, setImg } = useContext(AppContext);
  const { usersDate, setUsersDate } = useContext(AppContext);
  // modal
  const openModal = src => {
    setIsOpen(true);
    setImg(src);
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

  useEffect(() => {
    fetchPhotos(date.toISOString().split("T")[0]);
  }, [date]);

  if (!photoData) return <div />;

  return (
    <div
      className="gallery"
      onClick={e => {
        e.target.className === "photo" && openModal(e.target.src);
      }}
    >
      {photoData.length === 0 ? (
        <h3 id="no-photos">Sorry, no photos, yet!</h3>
      ) : (
        photoData.map(photo => {
          return photoCard(photo);
        })
      )}
    </div>
  );
}

export default Gallery;
