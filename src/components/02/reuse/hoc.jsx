import React from "react";

export const withSomeFeatures = (ReactComponent) => {
  return class DoesntMatterName extends React.Component {
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
    minus = () => {
      this.setState({
        count: this.state.count - 1,
      });
    };
    render() {
      return (
        <ReactComponent
          add={this.add}
          minus={this.minus}
          count={this.state.count}
        />
      );
    }
  };
};
