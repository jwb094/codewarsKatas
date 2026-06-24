function magicSum(arr) {
  if (Array.isArray(arr) && arr.length === 0) {
    return 0;
  }

  return arr
    .filter(
      (value, index) => value % 2 != 0 && value.toString().indexOf("3") > -1,
    )
    .reduce((prevValue, currentValue) => prevValue + currentValue, 0);
}

console.log(magicSum([]));

console.log(magicSum([3]));
console.log(magicSum([3, 12, 5, 8, 30, 13]));
