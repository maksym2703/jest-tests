jest.useFakeTimers();

describe("Some logging behavior", () => {
  test("execution order", async () => {
    const spy = jest.spyOn(console, "log");
    console.log("one");
    setTimeout(function () {
      console.log("two");
    }, 0);
    const promise = Promise.resolve().then(function () {
      console.log("tree");
    });
    console.log("four");
    await promise;
    jest.advanceTimersByTime(0);
    expect(spy).toHaveBeenNthCalledWith(1, "one");
    expect(spy).toHaveBeenNthCalledWith(2, "four");
    expect(spy).toHaveBeenNthCalledWith(3, "tree");
    expect(spy).toHaveBeenNthCalledWith(4, "two");
  });
});
