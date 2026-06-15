import { useContext, useEffect, useState } from "react";
import React from "react";

import Counter from "./lessons/Day1";

import Day2 from "./lessons/Day2";
import Day3 from "./lessons/Day3";
import Day4 from "./lessons/Day4";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Day4v2 from "./lessons/Day4v2";
import Navbar from "./shared/Navbar";
import UseContext from "./components/UseContext";
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/day1" element={<Counter />}></Route>
        <Route path="/day2" element={<Day2></Day2>}></Route>
        <Route path="/day3" element={<Day3></Day3>}></Route>
        <Route path="/day4" element={<Day4 />}></Route>

        <Route path="/day4v2" element={<Day4v2 />}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route
          path="*"
          element={
            <h1 className="text-red-600 text-4xl font-bold">
              404 page not found
            </h1>
          }
        ></Route>

        <Route path="/usecontext" element={<UseContext />}></Route>
      </Routes>
    </>
  );
};

export default App;
