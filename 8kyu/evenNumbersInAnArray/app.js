function evenNumbers(array, number) {
    // good luck

    return array.filter((value) => value % 2 == 0).slice(-number);
    var result = array.filter((value) => value % 2 == 0);
    console.log(result);
console.log(result.slice(-number))
  //return result.slice(result.length -1);
;  }

console.log(evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 3));
console.log(evenNumbers([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2));
console.log(evenNumbers([6, -25, 3, 7, 5, 5, 7, -3, 23], 1));