import React, { useEffect, useState } from "react";
import "./App.css";
import { Header } from "../Header/Header";
import { Background } from "../Background/Background";
import { Quote } from "../Quote/Quote";
import { Form } from "../Form/Form";
import { Psychometric } from "../Psychometric/Psychometric";
import { Info } from "../Info/Info";
import { Decoding } from "../Decoding/Decoding";
import { Footer } from "../Footer/Footer";
// import result from "../mockData/result.json";
import { handleSendingBirthDate } from "../utils/MainApi";
import Preloader from "../Preloader/Preloader";

export function App() {
  const [data, setData] = useState({}); // инфа по психоматрице
  const [dataInfo, setDataInfo] = useState({}); // загрузка данных с LS
  const [isLoading, setIsLoading] = useState(false);
  // const [isResult, setResult] = useState(false); // времянка для проверки работоспособности

  useEffect(() => {
    let birthDate = JSON.parse(localStorage.getItem("birthDate"));
    birthDate && handleSubmitDateBirth(birthDate);
    birthDate && setDataInfo(birthDate);
  }, []);

  // функция отправки даты рождения на сервер
  function handleSubmitDateBirth(date) {
    setIsLoading(true);
    handleSendingBirthDate(date)
      .then((res) => {
        const { mainInfo } = res;
        mainInfo ? setData(mainInfo) : setData({});
      })
      .catch((err) => {
        setData({});
        console.log(err);
      })
      .finally(() => setIsLoading(false));
  }

  return (
    <div className="page">
      <Header />
      <Background />
      <Quote />
      <Form isSubmit={handleSubmitDateBirth} initialInfo={dataInfo} />
      {data.length ? (
        isLoading ? (
          <Preloader />
        ) : (
          <>
            <Psychometric props={data} />
            <Info props={data} title={"Основные качества"} />
          </>
        )
      ) : (
        <Decoding />
      )}

      <Footer />
    </div>
  );
}
