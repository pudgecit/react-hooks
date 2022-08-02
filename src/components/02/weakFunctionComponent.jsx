export function WeakFunctionComponent({ count }) {
  // how to update count by itself?
  return (
    <div>
      hello world {count}
      <button>Update count</button>
    </div>
  );
}
