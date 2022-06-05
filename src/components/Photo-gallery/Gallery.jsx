import React from "react";
import "./Gallery.scss";

export default function Gallery() {
  const imgPathArray = new Array(9).fill(0);

  return (
    <article className="gallery">
      <h2 className="gallery__title">Photo Gallery</h2>
      <div className="gallery__photo-container">
        {imgPathArray.map((_, i) => (
          <img
            className="gallery__photo"
            key={i}
            alt="Perfomance"
            src={require(`../../assets/Images/Photo-gallery-${i + 1}.jpg`)}
          />
        ))}
      </div>
    </article>
  );
}
