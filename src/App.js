import React, { useEffect, useState } from "react";
import { animateScroll as scroll } from "react-scroll";
import "./assets/styles/App.css";
import { Header } from "./components/common/Header/Header";
import { Background } from "./components/common/Background/Background";
import { Quote } from "./components/feature-specific/Quote/Quote";
import { Form } from "./components/feature-specific/Form/Form";
import { Psychometric } from "./components/feature-specific/Psychometric/Psychometric";
import { Info } from "./components/feature-specific/Info/Info";
import { Decoding } from "./components/feature-specific/Decoding/Decoding";
import { Footer } from "./components/common/Footer/Footer";
import { handleSendingBirthDate } from "./utils/MainApi";
import Preloader from "./components/common/Preloader/Preloader";

export function App() {
  const [data, setData] = useState({}); // инфа по психоматрице
  const [dataInfo, setDataInfo] = useState({
    surname: "",
    name: "",
    stepName: "",
    dateBirth: "",
  }); // загрузка данных с LS
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let savedDate = JSON.parse(localStorage.getItem("userInfo"));
    savedDate && handleSubmitDateBirth(savedDate);
    savedDate && setDataInfo(savedDate);
  }, []);

  // функция отправки даты рождения на сервер
  function handleSubmitDateBirth(data) {
    localStorage.setItem("userInfo", JSON.stringify(data));
    setIsLoading(true);
    handleSendingBirthDate(data.dateBirth)
      .then((res) => setData(res))
      .catch((err) => {
        setData({});
        console.log(err);
      })
      .finally(() => setIsLoading(false));
  }

  function scrollToForm() {
    scroll.scrollToTop();
    setDataInfo({
      surname: "",
      name: "",
      stepName: "",
      dateBirth: "",
    });
  }

  return (
    <div className="page">
      <Header />
      <Background />
      <Quote />
      <Form isSubmit={handleSubmitDateBirth} initialInfo={dataInfo} />

      {data.length &&
        (isLoading ? (
          <Preloader />
        ) : (
          <>
            <Psychometric props={data} />
            {/* <Info props={data} /> */}
          </>
        ))}
      <Decoding />
      <Footer data={data} scrollToTop={() => scrollToForm()} />
      <button
        onClick={() => scroll.scrollToTop()}
        className="toTopButton"
      ></button>
    </div>
  );
}
