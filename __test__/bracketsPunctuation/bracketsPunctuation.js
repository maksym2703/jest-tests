function foo1() {
   return {
      bar: "hello",
   };
}

function foo2() {
   return
   {
      "hello"
   }
}

module.exports = { foo1, foo2 };
