// useEffect is used to do outside effects such as fetching data ,dom manipulations and  setTimeout
import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

const Day2 = () => {
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const url = "https://dummyjson.com/products";
  async function FetchData() {
    try {
      const response = await axios.get(url);
      setProduct(response.data.products);
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    setIsLoading(true);

    const time = setTimeout(async () => {
      try {
        await FetchData();
      } catch (err) {
        console.log("Error while loading data..", err);
      } finally {
        setIsLoading(false);
      }
    }, 1000);
    return () => clearTimeout(time);
  }, []);

  if (isLoading) {
    return (
      <>
        <h1 className="text-2xl">loading...</h1>
      </>
    );
  }
  return (
    <>
      <div className="items-container  flex items-center justify-center  ">
        <ul className="products flex  gap-2 w-4xl flex-wrap p-2 ">
          {product.map((item) => {
            return (
              <>
                <div className="item flex-1 min-w-1/4 p-10 bg-amber-300">
                  <li key={item.id}>{item.title}</li>
                </div>
              </>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Day2;

// more examples

// const [time, setTime] = useState(0);
// const [button, setButton] = useState(null);
// useEffect(() => {
//   //takes a callback and a dependency
//   // const timer = setInterval(() => {
//   //   setTime((prev) => prev + 1);
//   //   //setTimeout and setInterval
//   // }, 1000);
//   // //for setInterval loop we need to clear interval (unmount)
//   // return () => {
//   //   clearInterval(timer);
//   // };
// });
// useEffect(() => {
//   console.log("hello from use Effect");
//   return () => {
//     console.log("the interval is cleaned");
//   };
// // }, [button]);
// return (
//   <>
//     <p>{time} in seconds</p>
//     <button onClick={() => setButton(true)}>Clickme</button>
//   </>
// );
