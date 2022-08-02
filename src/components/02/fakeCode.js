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
