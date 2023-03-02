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
import result from "../mockData/result.json";
import { handleSendingBirthDate } from "../utils/MainApi";
import Preloader from "../Preloader/Preloader";

export function App() {
  const [data, setData] = useState(""); // инфа для заполненной формы
  const [isResult, setResult] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  // const [isResult, setResult] = useState(false); // времянка для проверки работоспособности

  useEffect(() => {
    console.log(data);
  }, [data]);

  // функция регистрации
  function handleRegister(date) {
    setIsLoading(true);
    handleSendingBirthDate(date)
      // .then((res) => setData(res))
      .then((res) => {
        setResult(true);
        return console.log(res);
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }

  return (
    <div className="page">
      <Header />
      <Background />
      <Quote />
      <Form isSubmit={handleRegister} />
      {isResult ? (
        isLoading ? (
          <Preloader />
        ) : (
          <>
            <Psychometric props={result} />
            <Info props={result} title={"Основные качества"} />
          </>
        )
      ) : (
        <Decoding />
      )}
      {/*       {isLoading ? (
        <Preloader />
      ) : (
        <>
          <Psychometric props={result} />
          <Info props={result} title={"Основные качества"} />
        </>
      )} */}

      <Footer />
    </div>
  );
}
