declare function otherUtilFunction(): string;

declare function someUtilFunction(): string;
declare function someRandomFunction(): number;
declare class MyClass {
    prop: number;
    getProp(): number;
    setProp(value: number): void;
    incr(): this;
}

export { MyClass, otherUtilFunction, someRandomFunction, someUtilFunction };
