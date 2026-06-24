function none(arr, fun) {
  // ...
  return arr.filter(fun).length === 0 ? true : false;
}

console.log(
  none([1, 2, 3, 4, 5], function (item) {
    return item > 5;
  }),
);

console.log(
  none([1, 2, 3, 4, 5], function (item) {
    return item > 4;
  }),
);
