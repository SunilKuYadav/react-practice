import React, { useState, useMemo } from "react";
import { useEffect } from "react";

const Memo = () => {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  const doubleNumber = useMemo(() => slowFunction(number), [number]);

  const themeStyle = useMemo(() => {
    return {
      backgroundColor: dark ? "black" : "white",
      color: dark ? "white" : "black",
    };
  }, [dark]);

  useEffect(() => {
    console.log("theme chaned");
  }, [themeStyle]);

  return (
    <>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={() => setDark((prev) => !prev)}>Change Theme</button>
      <div style={themeStyle}>{doubleNumber}</div>
    </>
  );
};

export default Memo;

const slowFunction = (num) => {
  for (let i = 0; i < 1000000000; i++) {}
  return num * 2;
};
