/*
function all(arr, fun) {
    console.log(fun(arr));
}


console.log(all([1, 2, 3, 4, 5], function(v) { 
  console.log(v);
  const less_than_nine = v.every((element)=>{
  return element < 9;
  });
  return less_than_nine;
// v.every((element)=>{
// return element < 9;
// });
  
  //return v < 9;
   }))*/

function all(arr, fun) {
  console.log(fun(arr));
}

console.log(
  all([1, 2, 3, 4, 5], function (v) {
    const less_than_nine = v.every((element) => {
      return element < 9;
    });
    return less_than_nine;
  }),
); //true

console.log(
  all([1, 2, 3, 4, 5], function (v) {
    const greater_than_nine = v.every((element) => {
      return element > 9;
    });
    return greater_than_nine;
  }),
); //false
