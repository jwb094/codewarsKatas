function squaresOnly(array) {

//  console.log(array.filter((e,i) => Number.isInteger(Math.sqrt(e)) === true));
 return array.filter((e,i) => Number.isInteger(Math.sqrt(e)) === true); 
//  console.log(array.filter((e,i) =>console.log(e ** 2 === array[i])));

//console.log();

    // var result = [], isSquare;
    // for (let i = 0; i < array.length; i++) {
    //   isSquare = !1; // !1 evaluates to false and is therefore a shorthand way of typing 'false'
    //   for (let k = 0; k <= 10; k++) {
    //     if (k ** 2 === array[i]) {
    //       isSquare = true;
    //     }
    //   }
    //   if (isSquare) {
    //     result[result.length] = array[i];
    //   }
    // }
    // return result;
  }

  console.log(squaresOnly([0,1,2,3,4,5,6,7,8,9,10]));//, [0,1,4,9]);
  console.log(squaresOnly([31,33,35,37,39,38,36,34,32]));//, [36]);
  console.log(squaresOnly([0,10,20,30,40,50,60,70,80,90,100]));//, [0,100]);
  console.log(squaresOnly([20,19,18,17,16,15,13,11,9,1,5,4]));//, [16,9,1,4]);
  console.log(squaresOnly([45,36,75,64,9,9,4,1,4,1,1,16,16,18,17,35,25,35]));//, [36,64,9,9,4,1,4,1,1,16,16,25]);