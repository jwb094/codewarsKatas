function take(arr, n) {
  // Your code here
  let result = [];
  for (let index = 0; index < n; index++) {
    result.push(arr[index]);
  }
  return result;
}

console.log(take([0, 1, 2, 3, 5, 8, 13], 3)); //[0, 1, 2]
