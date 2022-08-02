import React from "react";
import { WeakFunctionComponent } from "./weakFunctionComponent";

// extends
export class ClassComponent extends React.Component {
  // 必须要声明构造函数
  constructor(props) {
    super(props);
  }

  // 名字特别长的生命周期函数
  componentDidMount() {}

  render() {
    return (
      <div>
        hello world
        <WeakFunctionComponent count={2} />
      </div>
    );
  }
}
