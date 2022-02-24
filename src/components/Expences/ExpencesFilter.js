import React from "react";

import "./ExpencesFilter.css";

const ExpencesFilter = (props) => {
  const onSelectedYear = (e) => {
    props.onSelectedYear(e.target.value);
  };

  return (
    <div className="filter-container">
      <label>By Year</label>
      <div>
        <select value={props.selectedYear} onChange={onSelectedYear}>
          <option value="2019">2019</option>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
        </select>
      </div>
    </div>
  );
};

export default ExpencesFilter;
