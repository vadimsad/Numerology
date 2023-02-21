import React from "react";
import "./Info.css";
import { InfoItem } from "./InfoItem/InfoItem";

export function Info({ props, title }) {
  return (
    <section className="info">
      <h2 className="info__heading">{title}</h2>
      <div className="info__containers">
        {props?.mainInfo.map((item) => (
          <InfoItem props={item} key={item.name} />
        ))}
      </div>
      <h2 className="info__heading">{title}</h2>
      <div className="info__containers">
        {props?.additionalInfo.map((item) => (
          <InfoItem props={item} key={item.name} />
        ))}
      </div>
    </section>
  );
}
