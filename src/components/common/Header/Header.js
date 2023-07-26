import React, { useState, useEffect } from "react";
import "./Header.css";
import logo from "../../../assets/images/logos/header__logo.svg";
import logo_tablet from "../../../assets/images/logos/header__logo_tablet.svg";
import logo_mobile from "../../../assets/images/logos/header__logo_mobile.svg";
import telegram from "../../../assets/images/logos/telegram__logo.png";

export function Header() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [widthOffset, setWidthOffset] = useState(0);
  const [isBurgerOpen, setBurgerOpen] = useState(false);

  const handleScroll = () => {
    setScrollPosition(window.pageYOffset);
  };

  const handleResize = () => {
    setWidthOffset(document.documentElement.scrollWidth);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", handleResize);
    };
  }, []);

  const handleOpenBurgerMenu = () => {
    setBurgerOpen(!isBurgerOpen);
  };

  return (
    <header
      className={`header ${scrollPosition > 100 ? "header_overlay" : ""}`}
    >
      <div
        className={`header__container ${
          scrollPosition > 100 ? "header__container_active" : ""
        }`}
      >
        <img
          src={
            widthOffset > 1200
              ? logo
              : widthOffset > 900
              ? logo_tablet
              : logo_mobile
          }
          alt="logo"
          className="header__logo"
        />
        <div className="header__links">
          <p className="header__link header__link_selected">Квадрат Пифагора</p>
          <p className="header__link">Матрица судьбы</p>
          <p className="header__link">Личный нумеролог</p>
        </div>
        <div
          className={`header__menu ${isBurgerOpen && "header__menu_active"}`}
        >
          <a className="header__menu-link" href="/">
            Квадрат Пифагора
          </a>
          <a className="header__menu-link" href="/">
            Матрица судьбы
          </a>
          <a className="header__menu-link" href="/">
            Личный нумеролог
          </a>
        </div>
        <span
          className={`header__burger ${
            isBurgerOpen && "header__burger_active"
          }`}
          onClick={handleOpenBurgerMenu}
        />
      </div>
    </header>
  );
}
