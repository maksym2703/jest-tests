global.bar = undefined;
describe("", () => {
  global.alert = jest.fn();

  afterAll(() => {
    global.alert.mockClear();
  });
  test("", () => {
    require("./closures");
    expect.assertions(2);
    expect(global.alert).toHaveBeenNthCalledWith(1, "Hello World");
    expect(global.alert).toHaveBeenNthCalledWith(2, "Helloundefined");
  });
});
