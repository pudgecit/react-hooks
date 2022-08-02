import { useState } from "react";

const useSomeHook = () => {
  const [count, setCount] = useState(0);
  const add = () => {
    setCount((prevState) => prevState + 1);
  };
  const minus = () => {
    setCount((prevState) => prevState - 1);
  };
  return [count, add, minus];
};

export const UseCustomizeHookExample = () => {
  const [countWithSomeName, addWithSomeSpecialName] = useSomeHook();
  return (
    <div>
      {countWithSomeName}
      <button onClick={addWithSomeSpecialName}>add</button>
    </div>
  );
};
