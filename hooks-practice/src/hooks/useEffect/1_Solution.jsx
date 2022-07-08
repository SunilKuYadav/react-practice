import React, { useEffect, useState } from "react";

const Effect = () => {
  const [type, setType] = useState("posts");

  // render only first time
  useEffect(() => {
    console.log("render...");
  }, []);

  // onUpdate | onUnMount
  useEffect(() => {
    console.log("type change");
    return () => {
      console.log("return type or clean up");
    };
  }, [type]);
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
