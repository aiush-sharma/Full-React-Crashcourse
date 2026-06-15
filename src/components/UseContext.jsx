import ThemeContext from "../Hooks/ThemeContext";
import React from "react";
import Home from "../Pages/Home";
const UseContext = () => {
  const number = 5;
  return (
    <div>
      <ThemeContext.Provider value={number}>
        <Home />
      </ThemeContext.Provider>
    </div>
  );
};

export default UseContext;
