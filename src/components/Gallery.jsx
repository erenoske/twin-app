import line from "../assets/line-02.png";

import { GALLERYDATA } from "../SlideData.js";

import React, { useState } from "react";

import { Link } from "react-router-dom";

export default function Gallery() {
  const [click, clicked] = useState(false);
  const [targetImg, setTargetImg] = useState(null);

  const handleClick = (e) => {
    clicked(!click);
    setTargetImg(e.target.getAttribute("src"));
  };

  return (
    <div className="container top">
      <img src={line} alt="" className="line-img" />
      <h2 className="title">Galeri</h2>
      <div className="gallery">
        {GALLERYDATA.map(
          (img) =>
            img.id <= 6 && (
              <img
                src={img.img}
                alt=""
                key={img.id}
                className="gallery-item"
                onClick={handleClick}
                loading="lazy"
              />
            )
        )}
        <div
          className={`popup-image ${click ? "active" : null}`}
          onClick={handleClick}
        >
          <span>x</span>
          <img src={targetImg} alt="" />
        </div>
      </div>
      <Link to={"/galeri"} className="flex-center">
        <button>Tümünü göster</button>
      </Link>
    </div>
  );
}
