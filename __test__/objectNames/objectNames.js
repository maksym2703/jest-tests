var foo = { n: 1 };
var bar = foo;
foo.x = foo = { n: 2 };

module.exports = { foo, bar };
