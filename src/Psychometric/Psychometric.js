import React from "react";
import "./Psychometric.css";

export function Psychometric({ props }) {
  return (
    <section className="psychometric">
      <div className="psychometric__containers">
        <div className="psychometric__container">
          <div className="psychometric__results">
            {props?.mainInfo.map((item) => (
              <div className="psychometric__result" key={item.name}>
                <p className="psychometric__heading">
                  {item.number === +item.number ? item.number : "-"}
                </p>
                <p className="psychometric__subheading">{item.name}</p>
              </div>
            ))}
          </div>

          <div className="psychometric__verticals">
            {props?.additionalInfo.slice(0, 3).map((item) => (
              <div className="psychometric__item" key={item.name}>
                <p className="psychometric__heading">
                  {item.number === +item.number ? item.number : "-"}
                </p>
                <p className="psychometric__subheading">{item.name}</p>
              </div>
            ))}
          </div>

          <div className="psychometric__horizontals">
            {props?.additionalInfo.slice(3, 6).map((item) => (
              <div className="psychometric__item" key={item.name}>
                <p className="psychometric__heading">
                  {item.number === +item.number ? item.number : "-"}
                </p>
                <p className="psychometric__subheading">{item.name}</p>
              </div>
            ))}
          </div>

          <div className="psychometric__item">
            <p className="psychometric__heading">
              {props?.additionalInfo[6].number}/
              {props?.additionalInfo[7].number}
            </p>
            <p className="psychometric__subheading">
              {props?.additionalInfo[6].name}/{props?.additionalInfo[7].name}
            </p>
          </div>
        </div>

        <div className="psychometric__ads"></div>
      </div>
    </section>
  );
}
