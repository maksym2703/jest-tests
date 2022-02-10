const { doSomethingElse, doSomething, data } = require("./promises");

test('handling asynchronous test with return value', () => {
   expect.assertions(1);
   return doSomething()
      .then(() => doSomethingElse())
      .then(result => expect(result).toBe('200'))
});


test("handling asynchronous test with return undefined", () => {
   expect.assertions(1);
   return doSomething()
      .then(() => {
         doSomethingElse();
      })
      .then(result => expect(result).toBeUndefined()
      )
});


test("handling asynchronous test with return object", () => {
   expect.assertions(1);
   return doSomething()
      .then(doSomethingElse())
      .then(result => expect(result).toEqual(data)
      );
});

test("handling asynchronous test with return value", () => {
   expect.assertions(1);
   return doSomething()
      .then(doSomethingElse)
      .then(result => expect(result).toBe("200")
      );
});
