import React, { useState } from "react";

class MyComponent extends React.Component {
  state = {
    count: 0,
  };
  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        ></button>
      </div>
    );
  }
}

const MyComponentWithHooks = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      ></button>
    </div>
  );
};
