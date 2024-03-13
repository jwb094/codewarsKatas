function factors(integer, limit){
    //your code here
//     console.log(limit);
// for (let index = 0; index > limit; index--) {
    
//     console.log(index);
// }
let factors = [];
for (let index = limit; index <= integer; index++) {
    // console.log(index);
    // console.log(integer % index == 0);
    
    (integer % index == 0) == true ? factors.push(index) : null;


}
return factors.sort(function(a, b){return a-b});
  }

  console.log(factors(5, 1));
  console.log(factors(100,75));