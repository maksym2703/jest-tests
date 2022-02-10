const add = (a, b) => {
   if (typeof a !== "number" || (typeof b !== "number" && b !== undefined)) {
      throw new Error("argument is no a number");
   }
   if (b === undefined) {
      return function (c) {
         return a + c;
      };
   }
   return add(a)(b);
};

module.exports = { add };
