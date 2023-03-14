import React from "react";

export function InfoItem({ props, persons }) {
  return (
    <div className="info-item">
      <div className="info__container">
        <div className="info__main">
          <h2 className="info__title">{props.name?.split(" ")[0]}</h2>
          <div className="info__number">
            {/* {props?.number.split("-")[1] === "нет" ? "-" : props.number} */}
            {props.number}
          </div>
        </div>
        <p className="info__description">{props.description}</p>
      </div>
      <div className="info__items">
        {persons.map((item) => (
          <div className="info__item" key={item.name}>
            <div className="info__image"></div>
            <p className="info__name">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
