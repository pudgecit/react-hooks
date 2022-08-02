import { useState } from "react";

export const UseStateExample = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount((prevState) => prevState + 1)}>
        Add
      </button>
    </div>
  );
};
