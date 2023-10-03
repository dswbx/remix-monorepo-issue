import random from "lodash-es/random";

export function someUtilFunction() {
   return "some util...123 function";
}

export function someRandomFunction() {
   //return 1;
   let a = random(10);
   return a;
}

export class MyClass {
   prop: number = 1;
   getProp(): number {
      return this.prop + 61;
   }
   setProp(value: number) {
      this.prop = value;
   }
   incr() {
      this.prop++;
      return this;
   }
}
