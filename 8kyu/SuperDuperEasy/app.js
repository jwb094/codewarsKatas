function problem(x){
  //your code here
 //console.log(typeof x);
   return typeof x == 'string' ? "Error" : x * 50 + 6;
}


console.log(problem(1));
console.log(problem(5));
console.log(problem(0));
console.log(problem(1.2));
console.log(problem("RyanIsCool"));