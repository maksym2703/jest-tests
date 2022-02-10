//in Jest we use global instead window
global.foo || (global.foo = "bar");

describe("testing the value of a global variable", () => {
   afterAll(() => {
      delete global.foo;
   });
   test("test global property", () => {
      const result = global.foo || (global.foo = "bar");
      expect(global.foo).toBeDefined();
      expect(result).toBe("bar");
      expect(global.foo).toBe("bar");
   });
});
