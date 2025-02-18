fn = function plusone(n) {
  return n + 1;
};

var map = function (arr, fn) {
  let returnedArray = [];
  for (let i = 0; i < arr.length; i++) {
    returnedArray[i] = fn(arr[i], i);
  }

  return returnedArray;
};

console.log(map([1, 2, 3], fn));
