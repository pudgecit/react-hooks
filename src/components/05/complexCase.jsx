import { useEffect, useState } from "react";

export const UseEffectComplexOne = () => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      console.log("value", value);
    }, 2000);
  }, [value]);
  return (
    <div>
      <button onClick={() => setValue((prevState) => prevState + 1)}>
        add
      </button>
    </div>
  );
};
