import line from "../assets/line-02.png";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Slide from "../components/Slide.jsx";

import { SLIDEDATA } from "../SlideData.js";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import IntroductionSection from "../components/IntroductionSection.jsx";
import Gallery from "../components/Gallery.jsx";
import Faq from "../components/Faq.jsx";

export default function Home() {
  const breakpoints = {
    0: {
      slidesPerView: 1,
    },
    620: {
      slidesPerView: 2,
    },
    920: {
      slidesPerView: 3,
    },
  };
  return (
    <>
      <div className="container top">
        <img className="line-img" src={line} alt="line" />
        <h2 className="title">Hizmetlerimiz</h2>
        <Swiper
          slidesPerView={3}
          spaceBetween={25}
          breakpoints={breakpoints}
          loop={true}
          centeredSlides={true}
          fadeEffect={true}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {SLIDEDATA.map((slide) => (
            <SwiperSlide key={slide.title}>
              <Slide {...slide} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <IntroductionSection />
      <Gallery />
      <Faq />
    </>
  );
}
