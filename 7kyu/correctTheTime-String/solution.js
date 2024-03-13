var findDigit = function(num, nth){
    if (nth < 0 || nth == 0 )
     {
        return -1;
     }
     var numDigits = num.toString().split("").reverse();
    return nth > numDigits.length ? 0 :numDigits[nth-1]  === "-" ? 0: Number(numDigits[nth-1]);


}


console.log(findDigit(5673, 4));//, 5);
console.log(findDigit(129, 2));//, 2);
console.log(findDigit(-2825, 3));//, 8);
console.log(findDigit(-456, 4));//, 0);
console.log(findDigit(0, 20));//, 0);
console.log(findDigit(65, 0));//, -1);
console.log(findDigit(24, -8));//, -1);