import React, { useState } from "react";

const initialValue = () => {
  console.log("initial value");
  return 0;
};

const States = () => {
  // use of useState
  const [count, setCount] = useState(initialValue());

  // importance of prev
  // const decrement = () => {
  //   setCount((prev) => prev - 1);
  //   setCount((prev) => prev - 1);
  //   setCount((prev) => prev - 1);
  // };
  // const increment = () => {
  //   setCount((prev) => prev + 1);
  //   setCount((prev) => prev + 1);
  //   setCount((prev) => prev + 1);
  // };

  // lazy initialization
  const [num, setNum] = useState(() => initialValue());
  // const decrement = () => {
  //   setNum((prev) => prev - 1);
  //   setNum((prev) => prev - 1);
  //   setNum((prev) => prev - 1);
  // };
  // const increment = () => {
  //   setNum((prev) => prev + 1);
  //   setNum((prev) => prev + 1);
  //   setNum((prev) => prev + 1);
  // };

  // working with object
  const [data, setData] = useState({ count: 0, name: "Mob" });
  const decrement = () => {
    setData((prev) => ({
      count: prev.count - 1,
    }));
  };
  const increment = () => {
    setData((prev) => ({
      ...prev,
      count: prev.count + 1,
    }));
  };
  return (
    <>
      <button onClick={decrement}>-</button>
      <span>
        {data.count}
        {data.name}
      </span>
      <button onClick={increment}>+</button>
    </>
  );
};

export default States;
