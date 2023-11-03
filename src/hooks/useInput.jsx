import { useState } from "react";

const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (event) => {
    const data = event.target.value;
    setValue(data);
  };
  return [value, onChange];
};

export default useInput;
