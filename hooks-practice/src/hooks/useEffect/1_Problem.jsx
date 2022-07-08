import React, { useState } from "react";

const Effect = () => {
  const [type, setType] = useState("posts");

  // onMount
  // onUpdate
  // onUnMount

  return (
    <>
      <button onClick={() => setType("posts")}>Posts</button>
      <button onClick={() => setType("users")}>Users</button>
      <button onClick={() => setType("comments")}>Comments</button>
      <h1>{type}</h1>
    </>
  );
};

export default Effect;
