import React, { useState, useRef } from "react";
import { useEffect } from "react";

const Ref = () => {
  const [name, setName] = useState("");

  // show the number of time render
  const renderTimes = useRef(1);
  useEffect(() => {
    renderTimes.current += 1;
    prevName.current = name;
  });

  // use for access of dom elements
  const inputRef = useRef(null);
  const handleFocus = () => {
    inputRef.current.focus();
    inputRef.current.value = "Some values...."; // never do this because it will not render the components
  };

  // store previous state
  const prevName = useRef("");
  return (
    <>
      <input
        type="name"
        ref={inputRef}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleFocus}>Focus</button>
      <h2>
        My name in {name} and it used to be {prevName.current}
      </h2>
      <h2>I render {renderTimes.current} times</h2>
    </>
  );
};

export default Ref;
