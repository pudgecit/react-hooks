import { useEffect, useState } from "react";

const fetchAPI = () => {
  alert("hint api");
  return Promise.resolve("hello");
};

export const UseEffectExample = () => {
  const [message, setMessage] = useState();

  const fetchMethod = async () => {
    const message = await fetchAPI();
    setMessage(message);
  };

  useEffect(() => {
    fetchMethod();
  }, []);
  return <div>{message}</div>;
};
