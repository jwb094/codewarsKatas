function sumMul(n,m){
let multiples = [];
    for (let index = n; index < m; index++) {
      // const element = array[index];
      ( index % n  == 0) ? multiples.push(index):null ;
    }
// console.log(multiples);
// console.log(multiples.length);

return (multiples.length <= 0 ) ?  "INVALID" : multiples.reduce((result, currentValue) => result + currentValue);
if (multiples.length <= 0 ) {
  return "INVALID";
} else {
  return multiples.reduce((result, currentValue) => result + currentValue);
}
    // let index = 0;
    // let ans = [];
    // let result = 0;
    // do {
    //   ( index % n  == 0) ? ans.push(index) : null;        index++;
    //  //   ( index % n  == 0) ?  result+= result + index: null;        index++;
    //   //  index++;
    // }

    // while (index < m );
    // let sum = 0;
    // ans.forEach( num => {
    //     sum += num;
    //   })

    // console.log(sum);
    // //console.log(ans);
    // return (sum == 0 ) ?  "INVALID" : ans.reduce((result, currentValue) => result + currentValue);
}

console.log(sumMul(0,0));
console.log(sumMul(2,9));
 console.log(sumMul(4,-7));


console.log(sumMul(49, 6615));
// console.log(sumMul(4,-7));
// console.log(sumMul(4,-7));