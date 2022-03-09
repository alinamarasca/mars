import React from "react";

function photoCard(photo) {
  return (
    <div className="photo-card" key={photo.id}>
      <img src={photo.img_src} alt={photo.earth_date} />
      <p>{photo.camera.name}</p>
      <p>{photo.earth_date}</p>
    </div>
  );
}

export default photoCard;
