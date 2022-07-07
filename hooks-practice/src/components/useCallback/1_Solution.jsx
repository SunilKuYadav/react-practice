import React, { useState, useCallback } from "react";
import { useEffect } from "react";

const Callback = () => {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  const getItem = useCallback(
    (inc) => [number + inc, number + 1 + inc, number + 2 + inc],
    [number]
  );

  const theme = {
    backgroundColor: dark ? "#222" : "#eee",
    color: dark ? "#eee" : "#222",
  };

  return (
    <div style={theme}>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark((prev) => !prev)}>Change Theme</button>
      <List getItem={getItem} />
    </div>
  );
};

export default Callback;

const List = ({ getItem }) => {
  const [num, setNum] = useState([]);

  useEffect(() => {
    setNum(() => getItem(5));
    console.log("get Item Changed...");
  }, [getItem]);

  return num.map((item) => <p key={item}>{item}</p>);
};
