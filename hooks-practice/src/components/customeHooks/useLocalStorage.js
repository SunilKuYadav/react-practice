import { useState, useEffect } from "react";

const getStoredValue = (key, initialValue) => {
  const saveValue = JSON.parse(localStorage.getItem(key));

  // if we have previous value
  if (saveValue) return saveValue;

  // if intialValue is type of function
  if (initialValue instanceof Function) return initialValue();

  // else retuen initial value
  return initialValue;
};

const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => getStoredValue(key, initialValue));

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value]);

  return [value, setValue];
};

export default useLocalStorage;
