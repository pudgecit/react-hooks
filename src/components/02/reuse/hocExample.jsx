import { withSomeFeatures } from "./hoc";

const HocExample = ({ add, minus, count }) => {
  return (
    <div>
      <p>{count}</p>
      <button onClick={add}>add</button>
      <button onClick={minus}>minus</button>
    </div>
  );
};

export default withSomeFeatures(HocExample);
