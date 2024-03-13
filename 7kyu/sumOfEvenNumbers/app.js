function sumEvenNumbers(input) {
    // [...]

return input.filter((num) => num % 2 == 0 ).reduce((accumulator, currentValue) => accumulator + currentValue,0);

 
  }
  


  console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))