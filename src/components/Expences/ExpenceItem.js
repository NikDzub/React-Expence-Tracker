import React from "react";

import "./ExpenceItem.css";
import Card from "../UI/Card";

import ExpenceDate from "./ExpenceDate";

const ExpenceItem = (props) => {
  return (
    <li>
      <Card className="ex-item">
        <div className="ex-item__title">{props.title}</div>
        <ExpenceDate date={props.date}></ExpenceDate>
        <div className="ex-item__price">{props.price}$</div>
      </Card>
    </li>
  );
};

export default ExpenceItem;
