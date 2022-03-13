import React, { useEffect, useContext } from "react";
import photoCard from "./photoCard";
import AppContext from "../context/AppContext";
import convertDate from "./convertDate";
import Masonry from "react-masonry-css";

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

  const breakpoints = {
    default: 4,
    1400: 3,
    1050: 2,
    700: 1
  };

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
        <Masonry
          breakpointCols={breakpoints}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {photoData.map(photo => {
            return photoCard(photo);
          })}
        </Masonry>
      )}
    </div>
  );
}

export default Gallery;
