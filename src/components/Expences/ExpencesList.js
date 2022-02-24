import React from "react";

import "./ExpencesList.css";

import ExpenceItem from "./ExpenceItem";

const ExpencesList = (props) => {
  if (props.items.length == 0) {
    return <p className="noExpences">No Expences for {props.yearFilter}</p>;
  }

  return (
    <ul>
      {props.items.map((e) => {
        return (
          <ExpenceItem
            key={e.id}
            title={e.title}
            price={e.price}
            date={e.date}
          ></ExpenceItem>
        );
      })}
    </ul>
  );
};

export default ExpencesList;
