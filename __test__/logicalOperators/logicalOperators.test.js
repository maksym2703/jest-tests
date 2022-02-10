console.log("hello" || "world");
console.log("foo" && "bar");

describe('operator "||" finds the first true value or return false', () => {
   test('"hello" || "world" === "hello"', () => {
      expect("hello" || "world").toBe("hello");
   });
   test('"" || "world" === "world"', () => {
      expect("" || "world").toBe("world");
   });
});

describe('"&&" operator finds the first false value or returns the last true value', () => {
   test('"foo" && "bar" === "bar"', () => {
      expect("foo" && "bar").toBe("bar");
   });
   test('null && "bar" === null', () => {
      expect(null && "bar").toBe(null);
   });
});
