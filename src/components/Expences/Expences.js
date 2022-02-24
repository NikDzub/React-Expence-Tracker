import React, { useState } from "react";

import "./Expences.css";
import Card from "../UI/Card";

import ExpencesFilter from "./ExpencesFilter";
import ExpencesList from "./ExpencesList";
import ExpencesChart from "./ExpencesChart";

const Expences = (props) => {
  const [yearFilter, setYearFilter] = useState("2022");

  const onSelectedYearHandler = (e) => {
    setYearFilter(e);
  };

  const filteredExpences = props.expences.filter((e) => {
    return new Date(e.date).getFullYear() == yearFilter;
  });

  return (
    <Card className="expences">
      <ExpencesFilter
        selectedYear={yearFilter}
        onSelectedYear={onSelectedYearHandler}
      ></ExpencesFilter>
      {filteredExpences.length > 0 ? (
        <ExpencesChart expences={filteredExpences}></ExpencesChart>
      ) : null}
      <ExpencesList
        items={filteredExpences}
        yearFilter={yearFilter}
      ></ExpencesList>
    </Card>
  );
};

export default Expences;
