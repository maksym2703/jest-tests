const { foo1, foo2 } = require("./bracketsPunctuation");

describe("What will the functions foo1 return", () => {
  test('foo1 function return {bar: "hello"}', () => {
    expect(foo1()).toEqual({ bar: "hello" });
  });
  test("foo1 function is not undefined", () => {
    expect(foo1()).toBeDefined();
  });
  test("foo2 function will be undefined", () => {
    expect(foo2()).toBeUndefined();
  });
});
