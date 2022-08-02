import { useCallback, useMemo, useState } from "react";

const realComplexCalcFunction = () => {};

export const UseMemoExample = () => {
  const [count, setCount] = useState(0);
  const getDoubleCount = useCallback(() => {
    return count * 2;
  }, [count]);
  const enhancementCount = useMemo(() => {
    return realComplexCalcFunction(count);
  }, [count]);
  return (
    <div>
      <p>doubleCount: {getDoubleCount()}</p>
      {count}
      <button onClick={() => setCount((prevState) => prevState + 1)}>
        add
      </button>
    </div>
  );
};
