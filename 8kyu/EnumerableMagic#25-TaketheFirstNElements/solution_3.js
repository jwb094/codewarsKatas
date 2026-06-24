function take(arr, n) {
  // Your code here
  let result = [];
  i = 0;
  do {
    result.push(arr[i]);
    i++;
  } while (i < n);

  return result;
}

console.log(take([0, 1, 2, 3, 5, 8, 13], 3)); //[0, 1, 2]
