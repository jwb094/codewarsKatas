function sumCubes(n){
    // ...

    return n.filter((val) => typeof val !== "number").length > 0 ? undefined : n.map((x) => Math.pow(x, 3)).filter((num) =>  num % 2 !== 0).reduce((acc, cVal) => acc + cVal,0);

    //console.log( n.map((x) => Math.pow(x, 3)));

    const result = n.filter((val) => typeof val !== "number");
    console.log(result)

let sum = [];
    for (let index = 1; index <= n; index++) {
       sum.push(Math.pow(index, 3));
    }


    console.log(sum.filter((num) =>  num % 2 !== 0).reduce((accumulator, currentValue) => accumulator + currentValue,0));
    // return sum.reduce((accumulator, currentValue) => accumulator + currentValue,0);

  }


  console.log(sumCubes([1, 2, 3, 4])); //1
  console.log(sumCubes([-3, -2, 2, 3])); //9],
  console.log(sumCubes(["a", 12, 9, "z",42])); //36


//   [3, 36], [4, 100], 
//   [10, 3025], [123, 58155876] 