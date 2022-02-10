// "i'm a lasagna hog".split("").reverse().join("");

function wordReverse(str) {
   if (typeof str !== "string") {
      throw "this is not a string";
   }
   return str.split("").reverse().join("");
}

module.exports = { wordReverse };
