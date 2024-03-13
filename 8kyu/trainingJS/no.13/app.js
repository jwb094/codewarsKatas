const whatNumberIsIt = function (n){
    //coding here
    if(n >= Number.POSITIVE_INFINITY){return "Input number is Number.POSITIVE_INFINITY"}
    if(n === Number.MAX_VALUE){return "Input number is Number.MAX_VALUE"}
    if(n === Number.NEGATIVE_INFINITY){return "Input number is Number.NEGATIVE_INFINITY"}
    if(n === Number.MIN_VALUE){return "Input number is Number.MIN_VALUE"}
    if(Number.isNaN(n)){return "Input number is Number.NaN"}
    return `Input number is ${n}`;
    console.log(n);   
}

console.log(whatNumberIsIt(1/0));//,"Input number is Number.POSITIVE_INFINITY");
console.log(whatNumberIsIt(100));//,"Input number is 100");
console.log(whatNumberIsIt(1.7976931348623157e+308));//,"Input number is Number.MAX_VALUE");
console.log(whatNumberIsIt(5e-324));//,"Input number is Number.MIN_VALUE");
console.log(whatNumberIsIt(-Number.MAX_VALUE*2));//,"Input number is Number.NEGATIVE_INFINITY");
console.log(whatNumberIsIt(NaN));//"Input number is Number.NaN");
console.log(whatNumberIsIt(Infinity+1));//,"Input number is Number.POSITIVE_INFINITY");