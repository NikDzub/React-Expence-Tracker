import React, { useState } from "react";

import "./App.css";
import Expences from "./components/Expences/Expences";
import NewExpence from "./components/NewExpence/NewExpence";

const dummyExpences = [
  {
    id: 0.47571514639,
    title: "Car Incurance",
    price: 300,
    date: "2022-11-07T04:36",
  },
  {
    id: 0.47537214639,
    title: "New Desk",
    price: 200,
    date: "2022-01-08T04:36",
  },
  {
    id: 0.47571517919,
    title: "Car Breaks",
    price: 300,
    date: "2022-02-09T04:36",
  },
  {
    id: 0.44071514639,
    title: "Window Repair",
    price: 100,
    date: "2022-03-10T04:36",
  },
  {
    id: 0.47572529939,
    title: "Car Fine",
    price: 750,
    date: "2022-04-11T04:36",
  },
  {
    id: 0.42486614639,
    title: "Book",
    price: 100,
    date: "2022-05-12T04:36",
  },
  {
    id: 0.42423414639,
    title: "Food",
    price: 450,
    date: "2022-06-13T04:36",
  },
  {
    id: 0.42488904639,
    title: "Travel",
    price: 50,
    date: "2022-07-14T04:36",
  },
  {
    id: 0.42486623439,
    title: "Desk",
    price: 125,
    date: "2022-09-15T04:36",
  },
  {
    id: 0.42999614639,
    title: "Computer",
    price: 250,
    date: "2019-12-16T04:36",
  },
];

function App() {
  const [expences, setExpences] = useState(dummyExpences);

  const addExpenceHandler = (userInput) => {
    setExpences((prevExpences) => {
      return [userInput, ...prevExpences];
    });
  };
  return (
    <div className="container">
      <NewExpence onAddNewExpence={addExpenceHandler}></NewExpence>
      <Expences expences={expences}></Expences>
    </div>
  );
}

export default App;
