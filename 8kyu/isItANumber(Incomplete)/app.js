function isDigit(s) {
    //your code
return Number(s) ? true : false;
    console.log(Number(s));
  }

  console.log(isDigit(input = "s2324"));
  console.log(isDigit(input = "-234.4"));
  console.log(isDigit(input = " 3 "));
  console.log(isDigit(input = "  3  "));
  console.log(isDigit(input = "-3.23"));
  console.log(isDigit(input = "3-4"));
  console.log(isDigit(input = "  3   5"));
  console.log(isDigit(input = " 3 5"));
  console.log(isDigit(input = "zero"));