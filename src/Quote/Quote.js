import React from "react";
import "./Quote.css";

export function Quote() {
  return (
    <section className="quote">
      <div className="quote__image">
        <div className="quote__container">
          <p className="quote__title">
            Психоматрица по дате рождения (Квадрат Пифагора)
          </p>
          <p className="quote__subtitle">
            Метод позволяет определить по дате рождения типичные черты
            характера, заложенные человеку при рождении
          </p>
        </div>
      </div>

      <div className="quote__arrow" />
    </section>
  );
}
