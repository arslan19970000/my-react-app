// CounterContext.js
import React, { createContext, useState, useContext } from "react";

const CounterContext = createContext();

export const CounterProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);
  const incrementBy = (num) => setCount(count + num);
  const decrementBy = (num) => setCount(count - num);
  const toggle = () => setCount((prevCount) => prevCount === 0? greenColor :redColor);
  //add red color function
  const redColor = () => {
    document.body.style.backgroundColor = "red";
  }

  //add green color function
  const greenColor = () => {
    document.body.style.backgroundColor = "green";
  }

  //add blue color function
  const blueColor = () => {
    document.body.style.backgroundColor = "blue";
  }

  //add yellow color function
  const yellowColor = () => {
    document.body.style.backgroundColor = "yellow";
  }

  //add purple color function
  const purpleColor = () => {
    document.body.style.backgroundColor = "purple";
  }

  //add white color function
  const whiteColor = () => {
    document.body.style.backgroundColor = "white";
  }

  //add black color function
  const blackColor = () => {
    document.body.style.backgroundColor = "black";
  }

  //add random color function


  return (
    <CounterContext.Provider value={{ count, increment, decrement,reset,incrementBy,decrementBy,toggle ,redColor,greenColor}}>
      {children}
    </CounterContext.Provider>
  );
};

export const useCounter = () => useContext(CounterContext);
 