import React, { useState } from "react";

import Card from "../UI/Card";
import "./NewExpence.css";

import ExpenceForm from "./ExpenceForm";

const NewExpence = (props) => {
  const addNewExpence = (userInput) => {
    userInput.id = Math.random();
    props.onAddNewExpence(userInput);
  };
  const [formShown, setFormShown] = useState(false);
  const [buttonText, setButtonText] = useState("Add new Expence");

  const onToggleForm = () => {
    setFormShown(!formShown);
    !formShown ? setButtonText("Cancel") : setButtonText("Add new Expence");
  };

  return (
    <Card>
      {formShown && (
        <ExpenceForm
          onToggleForm={onToggleForm}
          onAddNewExpence={addNewExpence}
        ></ExpenceForm>
      )}
      <button className="formToggleBtn" onClick={onToggleForm}>
        {buttonText}
      </button>
    </Card>
  );
};

export default NewExpence;
