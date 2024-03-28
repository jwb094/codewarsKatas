function maxProduct(numbers, size){
    //your code here

    return numbers.sort(function(a,b) { return b -a}).splice(0,size).reduce((accumulator, currentValue) => accumulator * currentValue);
    //[10,8,7,9].sort(function(a,b) { return  b - a}).splice(0,3).reduce((accumulator, currentValue) => accumulator * currentValue);
    console.log();
  }



console.log(maxProduct([4,3,5], 2));//, 20);
console.log(maxProduct([10,8,7,9], 3));//), 720);
console.log(maxProduct([8,6,4,6], 3));//, 288);
console.log(maxProduct([10,2,3,8,1,10,4], 5));//, 9600);
console.log(maxProduct([13,12,-27,-302,25,37,133,155,-14], 5));//, 247895375);
console.log(maxProduct([-4,-27,-15,-6,-1], 2));//, 4);
console.log(maxProduct([-17,-8,-102,-309], 2));//, 136);
console.log(maxProduct([10,3,-27,-1], 3));//, -30);
console.log(maxProduct([14,29,-28,39,-16,-48], 4));//, -253344);
console.log(maxProduct([1], 1));//, 1);