import line from "../assets/line-02.png";
import { FAQDATA } from "../SlideData.js";
import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";
import { Link } from "react-router-dom";

export default function Faq() {
  const [openItems, setOpenItems] = useState(Array(FAQDATA.length).fill(false));

  const handleClick = (index) => {
    const newOpenItems = [...openItems];
    newOpenItems[index] = !newOpenItems[index];
    setOpenItems(newOpenItems);
  };

  return (
    <div className="container top">
      <img src={line} alt="line-img" className="line-img" />
      <h2 className="title">Sıkça Sorulan Sorular</h2>
      <div className="faq-container">
        {FAQDATA.map(
          (item, index) =>
            index < 4 && (
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
            )
        )}
        <Link to={"/S.S.S"} className="flex-center">
          <button>Tümünü göster</button>
        </Link>
      </div>
    </div>
  );
}
