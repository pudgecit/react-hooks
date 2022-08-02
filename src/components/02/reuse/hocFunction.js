function functionCanLog(otherFunction) {
  return function (...args) {
    console.log("log start");
    otherFunction(...args);
    console.log("log end");
  };
}

const newFunctionWithLog = functionCanLog(() => console.log("my logic code"));

newFunctionWithLog()
