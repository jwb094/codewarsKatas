function calculate(string) {

let operation = string.match(/loses|gains/g);
let numbers = string.match(/\d+/g);
operation = operation[0] === "gains" ?  "+" : "-" ;

return eval(numbers.shift() + operation +numbers.pop());

}

console.log(calculate("Panda has 48 apples and loses 4"));
console.log(calculate("Jerry has 34 apples and gains 6"));