import React from "react";
import "./Footer.css";

export function Footer({ data, scrollToTop }) {
  return (
    <footer className="footer">
      <button className="footer__button" onClick={() => scrollToTop()}>
        {data.length ? "Рассчитать другую дату" : "Рассчитать дату"}
      </button>
      <div className="footer__container">
        <p className="footer__text">2023 Ness Numerology</p>
        <p className="footer__text">
          На сайте содержится информация, предназначенная для лиц старше 18 лет.
        </p>
        <a href="mailto:ness.numerology@gmail.com" className="footer__link">
          ness.numerology@gmail.com
        </a>
      </div>
    </footer>
  );
}
