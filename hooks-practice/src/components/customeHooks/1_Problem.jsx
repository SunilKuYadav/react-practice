import React, { useState } from "react";

const CustomeHooks = () => {
  const [value, setValue] = useState("");

  // useLocalStorage
  // useUpdateLog
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
