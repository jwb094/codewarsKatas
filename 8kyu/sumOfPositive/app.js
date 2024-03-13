function positiveSum(input) {


    const result = input.filter((value) => value > 0);
//console.log(result);
return  result.length == 0 ? 0 :result.reduce((accumlator,currentValue) =>accumlator+currentValue);

//console.log( input );

// if (input.length == 0) {
//     return 0;
// } else {
// for (const key in input) {
//     if (input[key] < 1) {
//         var index = input.indexOf(input[key);
//        input.splice(index, 1);
// console.log(input[key]);
//     }}


    // input.forEach(element => {
       
    //     if (element < 1) {
          
    //       var index = input.indexOf(element);
    //     input.splice(index, 1);
    //     }
    // });
    // console.log(input);
    // return input.reduce((accumlator,currentValue) =>accumlator+currentValue);
}



console.log(positiveSum([1,2,3,4,5]));
console.log(positiveSum([1,-2,3,4,5]));
console.log(positiveSum([]));
console.log(positiveSum([-1,-2,-3,-4,-5]));
console.log(positiveSum([-1,2,3,4,-5]));