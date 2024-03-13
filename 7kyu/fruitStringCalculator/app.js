function calculate(string) {
  // Add your code here
 // let operation = string.match(/(loses|gains)/,"s");
 //console.log(/(loses|gains)/.test(string));
//  console.log(operation[0]);

//  console.log(string.match(/loses|gains/g));
// console.log(string.match(/\d+/g));

//  let nums = string.match(/\d{1,2}/,"gm");
//  console.log(nums);

let operation = string.match(/loses|gains/g);
let numbers = string.match(/\d+/g);
console.log(operation);
console.log(numbers);


operation = operation[0] === "gains" ?  "+" : "-" ;
console.log(operation);
console.log(operation);

return eval(numbers.shift() + operation +numbers.pop());
 // console.log(/\d{1,2}/.test(string));

  // const regexNum = new RegExp('/(loses|gains)/');
  // const regexOp = new RegExp('/(loses|gains)/');

  // console.log(regexOp.match
    
    
    
    
    
    
    //(string));
}

console.log(calculate("Panda has 48 apples and loses 4"));
console.log(calculate("Jerry has 34 apples and gains 6"));