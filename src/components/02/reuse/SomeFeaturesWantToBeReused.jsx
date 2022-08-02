import React from "react";

export class SomeFeaturesWantToBeReused extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  add() {
    this.setState({
      count: this.state.count + 1,
    });
  }
  minus(a, b) {
    this.setState({
      count: this.state.count - 1,
    });
  }
  render() {
    return null;
  }
}
