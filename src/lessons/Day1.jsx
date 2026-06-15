/*
use state is a react hook which adds state to a element.
state refers to values of variable
counter app is a perfect example for it
used in almost every react app
*/

import { React, useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [error, setError] = useState("");
  function Increment() {
    setCount((count) => count + 1);
    setError("");
  }
  function Decrement() {
    if (count > 0) setCount((count) => count - 1);
    else {
      setCount(0);
      setError("Limit Exceeded");
    }
  }
  return (
    <div className="w-80 h-100 bg-purple-300 mt-10 m-auto flex p-10 items-center flex-col   rounded-lg justify-around">
      <h1 className="text-2xl font-bold text-center"> Counter app</h1>
      <span className="text-xl font-bold">{count}</span>
      <span className="text-red-600 text-xl font-bold">{error}</span>

      <button className="p-4 bg-orange-400 rounded-lg  " onClick={Increment}>
        Increment
      </button>
      <button className="p-4 bg-green-600 rounded-lg" onClick={Decrement}>
        Decrement
      </button>
    </div>
  );
}
