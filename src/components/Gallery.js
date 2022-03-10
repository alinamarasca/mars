import React, { useEffect, useContext } from "react";
import photoCard from "./photoCard";
import AppContext from "../context/AppContext";
import convertDate from "./convertDate";

function Gallery() {
  const { photoData } = useContext(AppContext);
  const { date } = useContext(AppContext);
  const { setIsOpen } = useContext(AppContext);
  const { setImg } = useContext(AppContext);
  const { fetchPhotos } = useContext(AppContext);

  // modal
  const openModal = src => {
    setIsOpen(true);
    setImg(src);
  };
  //
  useEffect(() => {
    fetchPhotos(convertDate(date));
  }, [date]);

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
