const { foo, bar } = require("./objectNames");

describe("checking if objects are of the same types and structure.", () => {
   test("semantically the same", () => {
      expect(foo).toStrictEqual({ n: 2 });
   });
   test("are not semantically the same", () => {
      expect({ n: 1 }).not.toStrictEqual({ n: 1, x: { n: 2 } });
   });
   test("are not semantically the same", () => {
      expect(bar).toEqual({ n: 1, x: { n: 2 } });
   });
});
