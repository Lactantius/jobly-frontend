import { useState } from "react";

function useLocalStorage(
  key: string,
  init: string | number | object | boolean
) {
  const [val, setVal] = useState(() => {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : init;
  });

  const setStorage = (k: string, v: string | number | object | boolean) => {
    setVal(v);
    window.localStorage.setItem(k, JSON.stringify(v));
  };

  return [val, setStorage];
}

export { useLocalStorage };
