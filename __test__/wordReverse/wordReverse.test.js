const { wordReverse } = require("./wordReverse");

describe("reverse sentence", () => {
   const word1 = "abracadabra";
   const word2 = "world";
   const str = " pof ih";

   test("result of wordReverse function is string", () => {
      expect(typeof wordReverse(word1)).toBe("string");
   });
   test('reversing word "abracadabra"', () => {
      expect(wordReverse(word1)).toBe("arbadacarba");
   });
   test('reversing word "world"', () => {
      expect(wordReverse(word2)).toBe("dlrow");
   });
   test("reversing a few words", () => {
      expect(wordReverse(str)).toBe("hi fop ");
   });
   test('conditional test', () => {
      expect(() => typeof wordReverse(10)).toThrow()
   });
});
