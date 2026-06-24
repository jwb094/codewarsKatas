function all(arr, fun) {
  let result = [];
  for (let index = 0; index < arr.length; index++) {
    result.push(fun(arr[index]));
  }

  return result.every((element) => element === true);
}

console.log(
  all([1, 2, 3, 4, 5], function (v) {
    return v < 9;
  }),
); //true

console.log(
  all([1, 2, 3, 4, 5], function (v) {
    return v > 9;
  }),
); //false
