import { Link } from "react-router-dom";
import fLogo from "../assets/b-v1.png";
import sLogo from "../assets/b-v2.png";

export default function Footer() {
  return (
    <footer className="bg-dark">
      <div className="container footer-cont top bottom">
        <div className="footer-items">
          <Link to="/">
            <div className="logo-box">
              <img src={fLogo} alt="" />
              <img src={sLogo} alt="" />
            </div>
          </Link>
          <div>
            <div>Copyright © 2023, Tüm Hakları Saklıdır</div>
          </div>
        </div>
        <div className="footer-items">
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
        </div>
        <div className="footer-items">
          <a href="https://www.instagram.com/twinbabyspantalya/" target="_blank" rel="noreferrer" className="site-links">
            Instagram
          </a>
          <a href="https://www.facebook.com/twinbabyspantalya" target="_blank"  rel="noreferrer" className="site-links">
            Facebook
          </a>
        </div>
      </div>
    </footer>
  );
}
