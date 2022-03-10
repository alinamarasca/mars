import React from "react";

function photoCard(photo) {
  return (
    <div className="photo-card" key={photo.id}>
      <img className="photo" src={photo.img_src} alt={photo.earth_date} />
      <p className="photo-info">
        {photo.camera.name}, {photo.earth_date}
      </p>
    </div>
  );
}

export default photoCard;
