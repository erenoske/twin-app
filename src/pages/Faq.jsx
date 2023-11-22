import line from "../assets/line-02.png";
import { FAQDATA } from "../SlideData.js";
import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";
import ScrollToTop from "../components/ScrollToTop.jsx";

export default function Faq() {
  const [openItems, setOpenItems] = useState(Array(FAQDATA.length).fill(false));

  const handleClick = (index) => {
    const newOpenItems = [...openItems];
    newOpenItems[index] = !newOpenItems[index];
    setOpenItems(newOpenItems);
  };

  return (
    <>
      <ScrollToTop />
      <Helmet>
        <title>Twin Baby Spa - S.S.S</title>
      </Helmet>
      <div className="container top">
        <img src={line} alt="line-img" className="line-img" />
        <h2 className="title">Sıkça Sorulan Sorular</h2>
        <div className="faq-container">
          {FAQDATA.map((item, index) => (
            <div key={item.id} className="faq-item">
              <div className="faq-header" onClick={() => handleClick(index)}>
                <h2>{item.title}</h2>
                {openItems[index] ? (
                  <MdKeyboardArrowUp />
                ) : (
                  <MdKeyboardArrowDown />
                )}
              </div>
              <p className={openItems[index] ? null : "hidden"}>
                {item.paragraph}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
