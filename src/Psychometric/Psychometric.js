import React from "react";
import "./Psychometric.css";

export function Psychometric({ props }) {
  console.log(props);
  return (
    <section className="psychometric">
      <div className="psychometric__containers">
        <div className="psychometric__container">
          <div className="psychometric__results">
            {props[0]?.basic?.map((item) => (
              <div className="psychometric__result" key={item.name}>
                <p className="psychometric__heading">
                  {/* {item.number && item.number.split("-")[1] === "нет"
                    ? "-"
                    : item.number.split("-")[0]} */}
                  {item.number}
                </p>
                <p className="psychometric__subheading">
                  {/*  {item.name && item.name?.split(" ").length > 2
                    ? item.name?.split(" ").slice(0, 2).join(" ")
                    : item.name?.split(" ")[0]} */}
                  {item.name}
                </p>
              </div>
            ))}
          </div>

          <div className="psychometric__verticals">
            {props[1]?.addition?.slice(4, 7).map((item) => (
              <div className="psychometric__item" key={item.name}>
                <p className="psychometric__heading">
                  {/* {item.number.split("-")[1] === "нет"
                    ? "-"
                    : item.number.split("-")[1]} */}
                  {item.number}
                </p>
                <p className="psychometric__subheading">
                  {/* {item.name?.split(" ")[0]} */}
                  {item.name}
                </p>
              </div>
            ))}
          </div>

          <div className="psychometric__horizontals">
            {props[1]?.addition?.slice(0, 3).map((item) => (
              <div className="psychometric__item" key={item.name}>
                <p className="psychometric__heading">
                  {/* {item.number && item.number.split("-")[1] === "нет"
                    ? "-"
                    : item.number.split("-")[1]} */}
                  {item.number}
                </p>
                <p className="psychometric__subheading">
                  {/* {item.name && item.name?.split(" ").length >= 2
                    ? item.name?.split(" ").slice(1).join(" ")
                    : item.name?.split(" ")[0]} */}
                  {item.name}
                </p>
              </div>
            ))}
          </div>

          <div className="psychometric__item">
            <p className="psychometric__heading">
              {props[1]?.addition[3]?.number}/{props[1]?.addition[7]?.number}
            </p>
            <p className="psychometric__subheading">
              {props[1]?.addition[3]?.name}/{props[1]?.addition[7]?.name}
            </p>
          </div>
        </div>

        <div className="psychometric__ads"></div>
      </div>
    </section>
  );
}
