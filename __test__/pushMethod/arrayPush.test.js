const { foo } = require("./arrayPush");

describe("find length in array", () => {
  test(`[1,2].length === 2`, () => {
    expect(foo).toHaveLength(2);
  });
  test("search length in empty array", () => {
    expect([]).toHaveLength(0);
  });
});
