function any(arr, fun) {
  return arr.filter(fun).length > 0 ? true : false;
}

console.log(
  any([1, 2, 3, 4], function (v, i) {
    return v > 3;
  }),
);
