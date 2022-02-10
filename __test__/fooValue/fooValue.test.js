var foo = 10 + "20";

describe("Value of any type added to string is converted to string type first using its toString() method and then concatenated with string", () => {
   test('10 + "20" === "1020"', () => {
      expect(foo).toBe("1020");
   });

   test('resulting type of the expression 10+"20" should be string', () => {
      expect(typeof (10 + "20")).toBe("string");
   });
});
