import { useEffect } from "react";

const useUpdateLog = (value) => {
  useEffect(() => {
    console.log(value);
  }, [value]);
};

export default useUpdateLog;
