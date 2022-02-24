import React from "react";

import "./ExpencesChart.css";

import Chart from "../Chart/Chart";

const ExpencesChart = (props) => {
  const dataPoints = [
    { label: "January", value: 0 },
    { label: "February", value: 0 },
    { label: "March", value: 0 },
    { label: "April", value: 0 },
    { label: "May", value: 0 },
    { label: "June", value: 0 },
    { label: "July", value: 0 },
    { label: "August", value: 0 },
    { label: "September", value: 0 },
    { label: "October", value: 0 },
    { label: "November", value: 0 },
    { label: "December", value: 0 },
  ];
  for (let expence of props.expences) {
    const expenceMonth = new Date(expence.date).getMonth();
    dataPoints[expenceMonth].value += expence.price;
  }
  return (
    <div className="exChart">
      <Chart dataPoints={dataPoints}></Chart>
    </div>
  );
};

export default ExpencesChart;
