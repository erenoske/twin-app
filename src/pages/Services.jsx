import { Helmet } from "react-helmet-async";
import { SLIDEDATA } from "../SlideData.js";
import line from "../assets/line-02.png";

export default function Services() {
  return (
    <>
      <Helmet>
        <title>Twin Baby Spa - Hizmetlerimiz</title>
      </Helmet>
      <div className="container top">
      <img src={line} alt="line" className="line-img" />
        <div className="grid-cont">
          {SLIDEDATA.map((item) => (
            <div key={item.title} className="grid">
              <div className="grid-img-cont">
                <img src={item.img} className="grid-img" alt="" />
              </div>
              <h2 className="title">{item.title}</h2>
              <p>{item.paragraph}</p>
              <a href="#" className="slide-button">Daha Fazla Göster</a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
