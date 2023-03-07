import React, { useEffect, useState } from "react";
import "./Form.css";
import { useForm } from "react-hook-form";

export function Form({ isSubmit, initialInfo }) {
  const [info, setInfo] = useState({
    surname: "",
    name: "",
    stepName: "",
    dateBirth: "",
  });

  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      surname: "",
      name: "",
      stepName: "",
      dateBirth: "",
    },
    initialInfo,
  });

  /* surname: info?.surname,
      name: info?.name,
      stepName: info?.stepName,
      dateBirth: info?.dateBirth, */

  useEffect(() => {
    // console.log(initialInfo);
    setInfo(initialInfo);
  }, [initialInfo]);

  const onSubmit = (data) => {
    localStorage.setItem("birthDate", JSON.stringify(data));
    return isSubmit(data);
  };
  // const onSubmit = (data) => isSubmit(true); // времянка для проверки работоспособности

  return (
    <section className="form" id="form">
      <div className="form__container">
        <div className="form__heading">
          <h2 className="form__title">
            Чтобы выполнить расшифровку, введите данные
          </h2>
          <div className="form__info">
            <span className="form__question">
              <div className="form__triangle"></div>
              <div className="form__addition">
                <p className="form__text">
                  <span>Если вы изменили фамилию</span> (например в браке)
                  обязательно используйте ту, что была дана при рождении
                </p>
                <p className="form__text">
                  <span>Если в паспорте есть отчество</span> обязательно
                  используйте его в нумерологическом анализе
                </p>
              </div>
            </span>

            <p className="form__subtitle">Как правильно внести данные?</p>
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="form__form">
          <label className="form__label">
            <input
              {...register("surname", {
                required: "Это поле обязательное",
                minLength: { value: 3, message: "Минимум 3 символа" },
                pattern: {
                  value: /^[A-Za-zА-Яа-я]+$/,
                  message: "Допускаются только буквы",
                },
              })}
              placeholder="Фамилия"
              className={`form__input ${errors.surname && "form__input_error"}`}
            />
            {errors.surname && (
              <span className="form__input-error">
                {errors.surname.message}
              </span>
            )}
          </label>
          <label className="form__label">
            <input
              {...register("name", {
                required: "Это поле обязательное",
                minLength: { value: 2, message: "Минимум 2 символа" },
                pattern: {
                  value: /^[A-Za-zА-Яа-я]+$/,
                  message: "Допускаются только буквы",
                },
              })}
              placeholder="Имя"
              className={`form__input ${errors.name && "form__input_error"}`}
            />
            {errors.name && (
              <span className="form__input-error">{errors.name.message}</span>
            )}
          </label>
          <label className="form__label">
            <input
              {...register("stepName", {
                required: "Это поле обязательное",
                minLength: { value: 2, message: "Минимум 2 символа" },
                pattern: {
                  value: /^[A-Za-zА-Яа-я]+$/,
                  message: "Допускаются только буквы",
                },
              })}
              placeholder="Отчество"
              className={`form__input ${
                errors.stepName && "form__input_error"
              }`}
            />
            {errors.stepName && (
              <span className="form__input-error">
                {errors.stepName.message}
              </span>
            )}
          </label>

          <input
            type="date"
            {...register("dateBirth", { required: true })}
            className="form__input"
          />
          <button type="submit" className="form__submit" disabled={!isValid}>
            Рассчитать
          </button>
        </form>
      </div>
    </section>
  );
}
