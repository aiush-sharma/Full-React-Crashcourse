import React, { useContext } from "react";
import ThemeRandom from "../Hooks/ThemeContext";

const Details = () => {
  const data = useContext(ThemeRandom);
  if (data) {
    return (
      <>
        <h1>USE Context = {data}</h1>
      </>
    );
  }
};

export default Details;
