import React from "react";

import "./Chart.css";

import ChartBar from "./ChartBar";

const Chart = (props) => {
  let yearTotal = 0;

  const dataPointsValues = props.dataPoints.map((e) => {
    yearTotal += e.value;
    return e.value;
  });
  const maxValue = Math.max(...dataPointsValues);

  return (
    <div>
      {props.dataPoints.map((e) => {
        return (
          <ChartBar
            key={e.label}
            value={e.value}
            maxValue={maxValue}
            label={e.label}
          ></ChartBar>
        );
      })}
      <p className="yearTotal">Year Total : {yearTotal}$</p>
    </div>
  );
};

export default Chart;
