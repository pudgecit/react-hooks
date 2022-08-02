import { useMemo, useState } from "react";

const realComplexCalcFunction = () => {};

export const UseMemoExample = () => {
  const [count, setCount] = useState(0);
  const enhancementCount = useMemo(() => {
    return realComplexCalcFunction(count);
  }, [count]);
  return null;
};
