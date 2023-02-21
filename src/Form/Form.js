import React from "react";
import "./Form.css";
import { useForm } from "react-hook-form";

export function Form({ isSubmit }) {
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm();
  // const onSubmit = (data) => isSubmit(data);
  const onSubmit = (data) => isSubmit(true); // времянка для проверки работоспособности

  return (
    <section className="form" id="form">
      <div className="form__container">
        <div className="form__heading">
          <h2 className="form__title">
            Чтобы выполнить расшифровку, введите данные
          </h2>
          <div className="form__info">
            <span className="form__question" />
            <p className="form__subtitle">Как правильно внести данные?</p>
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="form__form">
          <input
            {...register("surname", { required: true })}
            placeholder="Фамилия"
            className="form__input"
          />
          <input
            {...register("name", { required: true })}
            placeholder="Имя"
            className="form__input"
          />
          <input
            {...register("stepName", { required: true })}
            placeholder="Отчество"
            className="form__input"
          />
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
