function counterGenerator() {
  let count = 0;
  return {
    log: () => console.log(count),
    add: () => (count += 1),
  };
}

const counter1 = counterGenerator();
const counter2 = counterGenerator();
counter1.add();
counter1.log();
counter2.log();
