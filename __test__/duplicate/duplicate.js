//[1,2,3,4,5] into [1,2,3,4,5,1,2,3,4,5];

function duplicate(arr) {
  if (Array.isArray(arr)) {
    return [...arr, ...arr];
  } else {
    throw "argument is not an array";
  }
}

module.exports = { duplicate };
