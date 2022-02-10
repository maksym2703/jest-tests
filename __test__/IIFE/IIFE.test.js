const immediatelyInvoke = require("./IIFE");

describe("testing immediately invoke function expression", () => {
  test("expect receive string", () => {
    expect(typeof immediatelyInvoke).toBe("string");
  });
  test("expect receive string value", () => {
    expect(immediatelyInvoke).toBe("John");
  });
  test("expect immediatelyInvoke is not a function", () => {
    expect(typeof immediatelyInvoke).not.toBe("function");
  });
});
console.log(immediatelyInvoke);
