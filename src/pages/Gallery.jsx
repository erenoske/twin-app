import { Helmet } from "react-helmet-async";
import line from "../assets/line-02.png";
import { GALLERYDATA } from "../SlideData.js";

import React, { useState } from "react";
import ScrollToTop from "../components/ScrollToTop.jsx";


export default function Gallery() {
  const [click, clicked] = useState(false);
  const [targetImg, setTargetImg] = useState(null);

  const handleClick = (e) => {
    clicked(!click);
    setTargetImg(e.target.getAttribute("src"));
  };

  return (
    <>
      <ScrollToTop />
      <Helmet>
        <title>Twin Baby Spa - Galeri</title>
      </Helmet>
      <div className="container top">
        <img src={line} alt="" className="line-img" />
        <h2 className="title">Galeri</h2>
        <div className="gallery">
          {GALLERYDATA.map((img) => (
            <img
              src={img.img}
              alt=""
              key={img.id}
              className="gallery-item"
              onClick={handleClick}
              loading="lazy"
            />
          ))}
          <div
            className={`popup-image ${click ? "active" : null}`}
            onClick={handleClick}
          >
            <span>x</span>
            <img src={targetImg} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
