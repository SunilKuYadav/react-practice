import React, { useState } from "react";
import { useEffect } from "react";

const Callback = () => {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  const getItem = () => [number, number + 1, number + 2];

  const theme = {
    backgroundColor: dark ? "#222" : "#eee",
    color: dark ? "#eee" : "#222",
  };

  return (
    <div style={theme}>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
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
    setNum(getItem());
    console.log("get Item Changed...");
  }, [getItem]);
  return num.map((item) => <p key={item}>{item}</p>);
};
