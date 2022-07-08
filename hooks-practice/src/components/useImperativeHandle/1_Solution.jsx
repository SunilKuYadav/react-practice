import React from "react";
import { useRef, useState, forwardRef } from "react";

const ImperativeHandle = () => {
  const [value, setValue] = useState("Mobcoder");
  const inputRef = useRef();
  return (
    <>
      <CustomInput
        ref={inputRef}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={() => inputRef.current.focus()}>Focus</button>
    </>
  );
};

export default ImperativeHandle;

const CustomInput = forwardRef(({ style, ...props }, ref) => (
  <input {...props} ref={ref} />
));
