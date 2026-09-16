const reverseSeq = n => {


// let arr = [];
// do {
//     arr.push(n);
//     n--;
// } while (n >= 1);
//     return arr;
console.log(Array(9) /* Array() = length of Array*/);
// map(//value , //index)
return Array(n).fill(0).map((e,i)=> n--);


  };


  console.log(reverseSeq(5));//[5, 4, 3, 2, 1]