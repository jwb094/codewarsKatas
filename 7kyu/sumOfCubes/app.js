function sumCubes(n){
    // ...
let sum = [];
    for (let index = 1; index <= n; index++) {
       sum.push(Math.pow(index, 3));
    }
 return sum.reduce((accumulator, currentValue) => accumulator + currentValue,0);

  }


  console.log(sumCubes(1)); //1
  console.log(sumCubes(2)); //9],
  console.log(sumCubes(3)); //36
  console.log(sumCubes(4)); //100
   console.log(sumCubes(10)); //3025
  console.log(sumCubes(123));//58155876

//   [3, 36], [4, 100], 
//   [10, 3025], [123, 58155876] 