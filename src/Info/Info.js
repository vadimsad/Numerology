import React from "react";
import "./Info.css";
import { InfoItem } from "./InfoItem/InfoItem";

export function Info({ props, title }) {
  return (
    <section className="info">
      <h2 className="info__heading">{title}</h2>
      <div className="info__containers">
        {props[0].basic.map((item) => (
          <InfoItem
            props={item}
            key={item.name}
            persons={props[2]?.celebrities}
          />
        ))}
      </div>
      <h2 className="info__heading">{title}</h2>
      <div className="info__containers">
        {props[1].addition.map((item) => (
          <InfoItem
            props={item}
            key={item.name}
            persons={props[2]?.celebrities}
          />
        ))}
      </div>
    </section>
  );
}
