function someFunctionComponent() {
  let myCount = 0;
  return {
    something: () => {
      myCount += 1;
    },
  };
}

const ui = someFunctionComponent();
console.log(ui);





class MyReact {
  domContent = null;

  setState(someNewState) {
    this.domContent = this.someChildComponent(someNewState);
  }

  someChildComponent(state) {
    return null;
  }

  render() {
    return this.domContent;
  }
}
