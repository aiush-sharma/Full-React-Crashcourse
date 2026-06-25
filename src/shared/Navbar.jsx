import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <header>
        <nav className=" p-6 bg-red-400 text-xl flex justify-between text-white">
          <h1>My React</h1>
          <ul className="flex gap-3 ">
            <li>
              <Link to="/day1">Day1</Link>
            </li>
            <li>
              <Link to="/day2">Day-2</Link>
            </li>
            <li>
              <Link to="/day3">Day3</Link>
            </li>
            <li>
              <Link to="/day4"> Day4</Link>
            </li>
            <li>
              <Link to="/day4v2">Day 5</Link>
            </li>
            <li>
              <Link to="/usecontext">Day 6</Link>
            </li>
            <li>
              <Link to="/day7">Day7</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
