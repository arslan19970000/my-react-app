import React from "react";
import { useCounter } from "./Productlist";


const Counter = () => {
  const { count, increment, decrement } = useCounter();

  return (
    <div className="p-4">
      <h1>Counter: {count}</h1>
      <button onClick={increment} className="px-4 py-2 bg-blue-500 text-white rounded">
        Increment
      </button>
      <button onClick={decrement} className="px-4 py-2 bg-red-500 text-white rounded ml-2">
        Decrement
      </button>
    </div>
  );
};

export default Counter;