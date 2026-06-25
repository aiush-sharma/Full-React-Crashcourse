import React, { useMemo, useState } from "react";
//use memo is used to control multiple rendering in react
const Day7 = () => {
  const [count, setCount] = useState(0);
  const [item, setItem] = useState(10);
  const Afunction = useMemo(() => {
    console.warn("Component a function mounted..");
    return count * 2;
  }, [count]);
  return (
    <>
      <div className="mt-10 m-auto container flex flex-col p-5  gap-5 w-lg bg-green-200">
        <h1 className="text-black text-4xl"> USE MEMO HOOK</h1>
        <p>{Afunction} - Return Count*2</p>
        <p className="bg-red-500">{count}</p>
        <p className="border-2 border-black">{item}</p>
        <button onClick={() => setCount(count + 1)} className="bg-red-500">
          Set Count
        </button>
        <button
          onClick={() => setItem(item * 10)}
          className="border-2 border-black"
        >
          Set Item
        </button>
      </div>
      hello world
    </>
  );
};

export default Day7;
