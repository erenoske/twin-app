import Whatsapp from "./Whatsapp.jsx";
import React, { useState, useEffect } from 'react';


export default function Hero() {
  const texts = [
    {
      label: "Duygusal Onarım",
      paragraph: "Bebeğinizin güvenli ve temiz bir ortamda bebek masajının ve yüzmenin keyfini çıkarabileceği bir ortam"
    },
    {
      label: "Sağlıklı ve Huzurlu",
      paragraph: "Daha fazla duyusal uyarım, daha sağlıklı gelişim için bebek spa"
    },
    {
      label: "Daha Rahat Uyku",
      paragraph: "Bebeğinize daha rahat bir uyku sağlayın"
    },
  ];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []); 

  return (
    <div className="container hero">
      <h1>{texts[currentTextIndex].label}</h1>
      <p>
        {texts[currentTextIndex].paragraph}
      </p>
      <div className="hero-buttons">
        <a
          href="https://api.whatsapp.com/send?phone=+905435679470&amp;text=Selam hizmetleriniz ile ilgili almak istiyorum."
          target="_blank"
          rel="noreferrer"
        >
          <button className="flex-center">
            <Whatsapp /> İletişim
          </button>
        </a>
      </div>
    </div>
  );
}
