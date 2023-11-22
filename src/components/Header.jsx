import { Link } from "react-router-dom";
import fLogo from "../assets/b-v1.png";
import sLogo from "../assets/b-v2.png";
import fVLogo from "../assets/v1.png";
import sVLogo from "../assets/v2.png";
import Hero from "./Hero.jsx";
import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

export default function Header() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Sayfanın scroll yüksekliğini al
      const scrollHeight = window.scrollY;

      // Eğer sayfa aşağı kaydırılmışsa ve belirli bir noktaya ulaşılmışsa
      if (scrollHeight > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Scroll olayını dinle
    window.addEventListener("scroll", handleScroll);

    // Temizleme fonksiyonu, komponent unmount olduğunda event listener'ı kaldırır
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div className="main-screen">
        <header className={`navbar-header ${isScrolled ? "active" : ""}`}>
          <Link to="/">
            <div className="logo-box">
              <img src={isScrolled ? fVLogo : fLogo} alt="" />
              <img src={isScrolled ? sVLogo : sLogo} alt="" />
            </div>
          </Link>
          <nav className="navbar-links">
            <Link to="/hakkimizda" className="site-links">
              Hakkımızda
            </Link>
            <Link to="/hizmetlerimiz" className="site-links">
              Hizmetlerimiz
            </Link>
            <Link to="/galeri" className="site-links">
              Galeri
            </Link>
            <Link to="/S.S.S" className="site-links">
              S.S.S
            </Link>
            <Link to="/iletisim" className="site-links">
              İletişim
            </Link>
          </nav>
          <div onClick={handleNav} className="menu-icon">
            {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
          </div>
        </header>
        <nav
          className={nav ? "navbar-mobil-links active" : "navbar-mobil-links"}
        >
          <Link to="/" className="site-links" onClick={handleNav}>
            Ana Sayfa
          </Link>
          <Link to="/hakkimizda" className="site-links" onClick={handleNav}>
            Hakkımızda
          </Link>
          <Link to="/hizmetlerimiz" className="site-links" onClick={handleNav}>
            Hizmetlerimiz
          </Link>
          <Link to="/galeri" className="site-links" onClick={handleNav}>
            Galeri
          </Link>
          <Link to="/S.S.S" className="site-links" onClick={handleNav}>
            S.S.S
          </Link>
          <Link to="/iletisim" className="site-links" onClick={handleNav}>
            İletişim
          </Link>
        </nav>
        <Hero />
      </div>
    </>
  );
}
