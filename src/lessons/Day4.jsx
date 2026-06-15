import React, { use, useEffect, useRef, useState } from "react";

const Day4 = () => {
  // useRef method in react hooks
  /*
  use effect help to access DOM elements
  without rerendering component
  it is the memory of a react application
  it is used in real time applications typing effect...
  */
  const count = useRef(0);
  console.error(count);
  const [name, setName] = useState("");

  useEffect(() => {
    console.log("component is changed");
    count.current = count.current + 1;
  });

  return (
    <>
      <div className="card p-10 bg-gray-300 flex gap-10 flex-col">
        <h1 className="text-5xl">Day-4 Use Reducer Hook</h1>
        <input
          type="text"
          className="bg-white"
          onChange={(e) => setName(e.target.value)}
        />
        <p>{name}</p>
        <p className="text-3xl text-red-600 p-2 bg-white">{count.current}</p>
      </div>
    </>
  );
};

export default Day4;
