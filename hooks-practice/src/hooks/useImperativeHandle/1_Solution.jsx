import React from "react";
import { useRef, useState, forwardRef, useImperativeHandle } from "react";

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
      <button onClick={() => inputRef.current.helloMob()}>Focus</button>
    </>
  );
};

export default ImperativeHandle;

// const CustomInput = forwardRef(({ style, ...props }, ref) => (
//   <input {...props} ref={ref} />
// ));

const CustomInput = forwardRef(({ style, ...props }, ref) => {
  useImperativeHandle(ref, () => ({ helloMob: () => alert(props.value) }), []);
  return <input {...props} ref={ref} />;
});
