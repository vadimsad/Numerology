import React, { useState } from "react";
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

export function App() {
  // const [data, setData] = useState(""); // инфа для заполненной формы
  const [isResult, setResult] = useState(false); // времянка для проверки работоспособности
  return (
    <div className="page">
      <Header />
      <Background />
      <Quote />
      <Form isSubmit={setResult} />
      {isResult ? (
        <>
          <Psychometric props={result} />
          <Info props={result} title={"Основные качества"} />
        </>
      ) : (
        <Decoding />
      )}

      <Footer />
    </div>
  );
}
