const { duplicate } = require("./duplicate");

describe("duplicate array", () => {
  const duplicated = [1, 2, 3, 4, 1, 2, 3, 4];
  const duplicateStr = [
    "one",
    "two",
    "three",
    "four",
    "five",
    "one",
    "two",
    "three",
    "four",
    "five",
  ];

  test("", () => {
    expect(() => {
      duplicate("stringValue");
    }).toThrow();
  });
  test("", () => {
    expect(() => {
      duplicate({ name: "John", age: 40 });
    }).toThrow();
  });
  test("duplicate with method arrayContaining", () => {
    expect(duplicate([1, 2, 3, 4])).toEqual(expect.arrayContaining(duplicated));
  });
  test("duplicate array with spread-operator", () => {
    expect(duplicate([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5, 1, 2, 3, 4, 5]);
  });
  test("duplicate array with spread-operator", () => {
    expect(duplicate(["one", "two", "three", "four", "five"])).toEqual(
      expect.arrayContaining(duplicateStr)
    );
  });
});
