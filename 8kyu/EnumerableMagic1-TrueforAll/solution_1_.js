function all(arr, fun) {
  console.log(fun);
  return false;
}

console.log(
  all([1, 2, 3, 4, 5], function (v) {
    return v < 9;
  }),
); //
