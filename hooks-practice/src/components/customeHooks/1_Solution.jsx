import React from "react";
import useLocalStorage from "./useLocalStorage";
import useUpdateLog from "./useUpdateLog";

const CustomeHooks = () => {
  const [value, setValue] = useLocalStorage("value", "");
  useUpdateLog(value);
  return (
    <>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </>
  );
};

export default CustomeHooks;
