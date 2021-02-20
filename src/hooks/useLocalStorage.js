import { useState, useEffect } from 'react';

// Custom hook
// Save and retrieve data - local storage
const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    let data = window.localStorage.getItem(key);
    if (data) {
      return data;
    }
    return initialValue;
  });

  useEffect(() => {
    if (value !== null) {
      window.localStorage.setItem(key, value);
    }
  }, [value, key]);

  return {
    value,
    setValue,
  };
};

export default useLocalStorage;
