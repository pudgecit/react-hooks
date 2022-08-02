import { useRef } from "react";

class SomeClass {
  someMethod() {}
}

export const useRefExample = () => {
  const classInstanceRef = useRef(new SomeClass());
  return (
    <div>
      <button
        onClick={() => {
          classInstanceRef.current.someMethod();
        }}
      >
        add
      </button>
    </div>
  );
};
