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
import { handleSendingBirthDate } from "../utils/MainApi";
import Preloader from "../Preloader/Preloader";

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
      .then((res) => {
        const { mainInfo } = res;
        mainInfo ? setData(mainInfo) : setData({}); // уточнить при последующей работе с бекендом
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
      {data.length &&
        (isLoading ? (
          <Preloader />
        ) : (
          <>
            <Psychometric props={data} />
            <Info props={data} title={"Основные качества"} />
          </>
        ))}
      <Decoding />
      <Footer props={data} />
    </div>
  );
}
