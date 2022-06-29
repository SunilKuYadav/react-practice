import React, { useState, useEffect, useMemo, useDeferredValue } from "react";

const LIST_SIZE = 20000;

const DeferredValue = () => {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <>
      <input type="text" value={input} onChange={handleChange} />
      <List input={input} />
    </>
  );
};

export default DeferredValue;

const List = ({ input }) => {
  const deferredInput = useDeferredValue(input);

  const list = useMemo(() => {
    const l = [];
    for (let i = 0; i < LIST_SIZE; i++) {
      l.push(<div key={i}>{deferredInput}</div>);
    }
    return l;
  }, [deferredInput]);

  useEffect(() => {
    console.log(`Input: ${input}\n Deferred: ${deferredInput}`);
  });

  return list;
};
