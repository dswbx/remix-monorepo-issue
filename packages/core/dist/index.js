// src/utils/other.ts
function otherUtilFunction() {
  return "other util function";
}

// src/utils/some.ts
import random from "lodash-es/random";
function someUtilFunction() {
  return "some util...123 function";
}
function someRandomFunction() {
  let a = random(10);
  return a;
}
var MyClass = class {
  prop = 1;
  getProp() {
    return this.prop + 61;
  }
  setProp(value) {
    this.prop = value;
  }
  incr() {
    this.prop++;
    return this;
  }
};
export {
  MyClass,
  otherUtilFunction,
  someRandomFunction,
  someUtilFunction
};
//# sourceMappingURL=index.js.map