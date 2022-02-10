// console.log(0.1 + 0.2 == 0.3);

describe("inaccurate calculations in js", () => {
  test("inaccurate  sum of decimal numbers", () => {
    expect(0.2 + 0.1).toBeCloseTo(0.3);
  });
  test("accurate sum of decimal numbers", () => {
    expect(0.2 + 0.1).toBe(0.30000000000000004);
  });
});
