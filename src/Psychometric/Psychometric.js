import React from "react";
import "./Psychometric.css";

export function Psychometric({ props }) {
  return (
    <section className="psychometric">
      <div className="psychometric__container">
        <div className="psychometric__results">
          {props[0][0].map((item) => (
            <div className="psychometric__result" key={item.name}>
              <p className="psychometric__heading">
                {/* {item.number?.split("-")[1] === "нет" ? "-" : item.number} */}
                {item.number || "0"}
              </p>
              <p className="psychometric__subheading">{item.name}</p>
            </div>
          ))}
        </div>

        <div className="psychometric__verticals">
          {props[1][0].slice(4, 7).map((item) => (
            <div className="psychometric__item" key={item.name}>
              <p className="psychometric__heading">{item.number || "-"}</p>
              <p className="psychometric__subheading">{item.name}</p>
            </div>
          ))}
        </div>

        <div className="psychometric__horizontals">
          {props[1][0].slice(0, 3).map((item) => (
            <div className="psychometric__item" key={item.name}>
              <p className="psychometric__heading">{item.number || "0"}</p>
              <p className="psychometric__subheading">{item.name}</p>
            </div>
          ))}
        </div>

        <div className="psychometric__item">
          <p className="psychometric__heading">
            {props[1][0][3]?.number}/{props[1][0][7]?.number}
          </p>
          <p className="psychometric__subheading">
            {props[1][0][3]?.name}/{props[1][0][7]?.name}
          </p>
        </div>
      </div>

      <div className="psychometric__ads"></div>
    </section>
  );
}
