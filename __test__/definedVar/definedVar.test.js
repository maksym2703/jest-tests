describe("whether the variable is undefined?", () => {
   require('./definedVar')
   afterAll(() => {
      delete global.b;
   });
   test("defined variable", () => {
      expect(typeof b !== "undefined").toBeTruthy();
   });
   test("undefined variable", () => {
      expect(typeof a === "undefined").toBeTruthy();
   });
});
