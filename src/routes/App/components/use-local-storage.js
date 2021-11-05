import { useState } from "react";

export default function useLocalStorage(key, defaultValue) {   
  const [storedValue, setStoredValue] = useState(() => {
    try {      
      const item = window.localStorage.getItem(key);      
      return item ? JSON.parse(item) : defaultValue;
    } catch (error) {      
      console.log(error);
      return defaultValue;
    }
  });

  const setValue = value => {
    try {
      setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.log(error);
    }
  };

  return [storedValue, setValue];
}
