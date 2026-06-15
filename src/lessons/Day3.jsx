import React from "react";
import { Link } from "react-router-dom";

//create a navbar here to learn react route
// routes are used to create no reload links in js.
// routes are used in single page react applications
const Day3 = () => {
  return (
    <>
      <nav>
        <div className="logo">Day-3</div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <a href="reloaderlink">Link3 </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Day3;
