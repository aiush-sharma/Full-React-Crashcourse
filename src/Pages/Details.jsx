import React, { useContext, useState, useEffect } from "react";
import ThemeRandom from "../Hooks/ThemeContext";

const Details = () => {
  const data = useContext(ThemeRandom);
  const [state, setState] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {

  
      
      const timer = setTimeout(() => {
        setState(true);
        setLoading(false)
      }, 1000);
      return () => {
        clearTimeout(timer);
      };
    
 
  });

  if (loading) {
    return (
      <>
        <h1 className="text-xl">Is loading...</h1>
      </>
    );
  }

  if (state && data) {
    return (
      <>
        <h1>USE Context from UseContext.jsx</h1>
        <h1 className="text-3xl text-yellow-500">Data = {data}</h1>
      </>
    );
  }
};

export default Details;
