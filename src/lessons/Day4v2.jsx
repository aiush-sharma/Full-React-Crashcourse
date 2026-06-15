import React, { useEffect, useState } from "react";
import { useRef } from "react";
const Day4v2 = () => {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  function generateRandom() {
    console.warn("use state committed");
    setCount(Math.floor(Math.random() * 999));
  }

  function generateRandomRef() {
    console.warn("use ref initialized");
    countRef.current = Math.floor(Math.random() * 999);
  }
  useEffect(() => {
    console.log("Component Mounted...");
  });
  return (
    <div className="p-10 bg-gray-100 flex justify-center flex-col w-2xl gap-6 m-auto">
      <h1 className="text-2xl uppercase">
        {" "}
        USE REF APPLICATION
      </h1>
  
      <p>{count}</p>
      <button className="p-5 rounded-xl bg-green-500" onClick={generateRandom}>
        useState
      </button>
   
      <p>{countRef.current}</p>
      <button
        className="p-6 rounded-2xl bg-red-600"
        onClick={generateRandomRef}
      >
        UseRef
      </button>
    </div>
  );
};

export default Day4v2;
