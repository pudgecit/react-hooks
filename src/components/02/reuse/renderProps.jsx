import React from "react";

export class SomeFeaturesWantToBeReusedWithRenderProps extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  add = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  minus = (a, b) => {
    this.setState({
      count: this.state.count - 1,
    });
  };
  render() {
    const someFeatures = {
      count: this.state.count,
      add: this.add,
      minus: this.minus,
    };
    if (typeof this.props.children === "function") {
      return this.props.children(someFeatures);
    }
    if (typeof this.props.renderContent === "function") {
      return this.props.renderContent(someFeatures);
    }
    return null;
  }
}
