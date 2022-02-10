const { add } = require("./add");

describe("tests for currying function add(a)(b)", () => {
   const a = 2;
   const b = 5;
   const c = "5";

   test("currying function add", () => {
      expect(add(a)(b)).toBe(7);
   });
   test("function add(a)(b) === add(a, b)", () => {
      expect(add(a)(b)).toBe(add(a, b));
   });
   test("function add with string parameter throw an error", () => {
      expect(() => {
         add(a, c).toThrow();
      });
   });
   test("function add with undefined parameter throw an error", () => {
      expect(() => {
         add(undefined, b).toThrow();
      });
   });
   test("function add throw an error with different data types", () => {
      expect(() => {
         add([], null).toThrow();
      });
   });
   test('conditional test', () => {
      expect(() => typeof add('value')).toThrow()
   });
});
