import React from "react";

import "./ChartBar.css";

const ChartBar = (props) => {
  let barFill = "0%";

  if (props.maxValue > 0) {
    barFill = ((props.value / props.maxValue) * 100).toString() + "%";
  }
  return (
    <div className="chartBar">
      <div
        style={{
          backgroundColor: "rgba(255, 255, 255," + barFill + ")",
        }}
      >
        {props.label} - {props.value}$
      </div>
    </div>
  );
};

export default ChartBar;
