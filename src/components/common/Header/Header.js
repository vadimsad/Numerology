import React, { useState, useEffect } from "react";
import "./Header.css";
import logo from "../../../assets/images/logos/header__logo.svg";
import logo_tablet from "../../../assets/images/logos/header__logo_tablet.svg";
import logo_mobile from "../../../assets/images/logos/header__logo_mobile.svg";
import telegram from "../../../assets/images/logos/telegram__logo.png";
import Modal from 'react-modal';

const modalStyles = {
  overlay: {
    zIndex: 5,
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
  },
  content: {
    minWidth: '300px',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

export function Header() {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [widthOffset, setWidthOffset] = useState(0);
  const [isBurgerOpen, setBurgerOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

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
          <button type='button' onClick={openModal} className="header__link">Личный нумеролог</button>
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
          <button type='modal' onClick={openModal} className="header__menu-link">
            Личный нумеролог
          </button>
        </div>
        <span
          className={`header__burger ${
            isBurgerOpen && "header__burger_active"
          }`}
          onClick={handleOpenBurgerMenu}
        />
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={modalStyles}
        contentLabel="Example Modal"
 
      >
        <h2>Hello</h2>
        <p>I am a modal</p>
        <button type='button' onClick={closeModal}>close</button>
      </Modal>
    </header>
  );
}
