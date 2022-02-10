let values = [];
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    values.push("fizzbuzz");
  } else if (i % 3 === 0) {
    values.push("fizz");
  } else if (i % 5 === 0) {
    values.push("buzz");
  } else {
    values.push("-");
  }
}

module.exports = values;
