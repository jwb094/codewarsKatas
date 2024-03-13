function sumCubes(n){
    // ...

    return n.filter((val) => typeof val !== "number").length > 0 ? undefined : n.map((x) => Math.pow(x, 3)).filter((num) =>  num % 2 !== 0).reduce((acc, cVal) => acc + cVal,0);

  }


  console.log(sumCubes([1, 2, 3, 4])); //1
  console.log(sumCubes([-3, -2, 2, 3])); //9],
  console.log(sumCubes(["a", 12, 9, "z",42])); //36
