import React from "react";
import { WeakFunctionComponent } from "./weakFunctionComponent";

// extends
export class ClassComponent extends React.Component {
  // 必须要声明构造函数
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  // 名字特别长的生命周期函数
  componentDidMount() {}

  magicThis() {
    // here this is not component instance
    this.setState({
      count: this.state.count + 1,
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.magicThis}>magicThis</button>
        hello world
        <WeakFunctionComponent count={2} />
      </div>
    );
  }
}
