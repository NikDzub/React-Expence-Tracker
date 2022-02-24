import React from "react";

import "./ExpenceDate.css";

const ExpenceDate = (props) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const date = new Date(props.date);

  const year = date.getFullYear();
  const month = months[date.getUTCMonth()];
  const day = date.getUTCDate();
  return (
    <div className="ex-item__date">
      <p>
        {day} {month} {year}
      </p>
    </div>
  );
};

export default ExpenceDate;
