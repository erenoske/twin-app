import { FaLocationDot } from "react-icons/fa6";
import { TbMailFilled } from "react-icons/tb";
import { FaPhone } from "react-icons/fa6";

export default function Contact() {
  return (
    <section className="bg-green line-top">
      <div className="container top">
        <h2 className="title white">İletişim</h2>
        <div className="contact">
          <div className="items">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1596.1801299947065!2d30.736527438935124!3d36.857794739166025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x43cfa9cad6d69f83%3A0x744aaa40a8d092f4!2sTwin%20Baby%20Spa%20%26%20Anne%20Bebek%20Akademisi!5e0!3m2!1str!2str!4v1690341664513!5m2!1str!2str"
              width="100%"
              height="450"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="googleMaps"
            ></iframe>
          </div>
          <div className="items contact-items">
            <h3 className="white">
              <FaLocationDot /> Adres
            </h3>
            <p className="white">
              Şirinyalı mah. 1542 Sk. No:3 Hagel apt. Kat:1 Daire:4
              Muratpaşa/Antalya
            </p>

            <h3 className="white">
              <FaPhone /> Telefon
            </h3>
            <a href="tel:+905435679470" rel="noreferrer">
              <p className="white">+90 543 567 94 70</p>
            </a>

            <h3 className="white">
              <TbMailFilled /> E-posta
            </h3>
            <a
              href="mailto:info@twinbabyspa.com"
              target="_blank"
              rel="noreferrer"
            >
              <p className="white">info@twinbabyspa.com</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
