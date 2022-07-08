import React, { useState } from "react";

const Ref = () => {
  const [name, setName] = useState("");

  // show the number of time render
  // use for access of dom elements
  // store previous state
  return (
    <>
      <input
        type="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <h2>My name in {name}</h2>
    </>
  );
};

export default Ref;
