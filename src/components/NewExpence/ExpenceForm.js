import React, { useState } from "react";

import "./ExpenceForm.css";

const ExpenceForm = (props) => {
  const [userInput, setUserInput] = useState({
    title: "",
    date: "",
    price: "",
  });

  const titleChangeHandler = (e) => {
    setUserInput((prevState) => {
      return { ...prevState, title: e.target.value };
    });
  };

  const dateChangeHandler = (e) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        date: e.target.value,
      };
    });
  };

  const priceChangeHandler = (e) => {
    setUserInput((prevState) => {
      return { ...prevState, price: e.target.value };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    userInput.price = parseInt(userInput.price);
    props.onAddNewExpence(userInput);
    setUserInput({
      title: "",
      date: "",
      price: "",
    });

    props.onToggleForm();
  };
  return (
    <form className="ex-form" onSubmit={submitHandler}>
      <div className="ex-form__section">
        <label htmlFor="title">TITLE</label>
        <input
          id="title"
          type="text"
          onChange={titleChangeHandler}
          value={userInput.title}
          required
        />
      </div>
      <div className="ex-form__section">
        <label htmlFor="date">DATE</label>
        <input
          id="date"
          type="date"
          min="2019-01-01"
          onChange={dateChangeHandler}
          value={userInput.date}
          required
        />
      </div>
      <div className="ex-form__section">
        <label htmlFor="price">PRICE</label>
        <input
          id="price"
          type="number"
          min="0"
          onChange={priceChangeHandler}
          value={userInput.price}
          required
        />
      </div>
      <div className="ex-form__section">
        <button className="ex-form__submit" type="submit">
          Add Expence
        </button>
      </div>
    </form>
  );
};

export default ExpenceForm;
