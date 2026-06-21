import ThemeContext from "../Hooks/ThemeContext";
import React from "react";
import Home from "../Pages/Home";
import Details from "../Pages/Details";
const UseContext = () => {
  const number = 5;
  return (
    <div>
      <ThemeContext.Provider value={number}>
        <Details></Details>
      </ThemeContext.Provider>
    </div>
  );
};

export default UseContext;
