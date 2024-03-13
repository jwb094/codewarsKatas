function squareSum(numbers){
    let squareSumofN = 0;
    
    //   return  numbers.length == 0 ? 0 :    numbers.reduce((accumulator, currentValue) =>  accumulator + (currentValue * currentValue));
    // console.log(sumWithInitial);

    for (const key in numbers) {
        squareSumofN += numbers[key] * numbers[key]; 
    }
    return  squareSumofN;
    console.log(initialValue);
}


console.log(squareSum([1,2]));
console.log(squareSum([-2,0]));
console.log(squareSum([14,-8,-5,-10,2,12,-12,-19,6,19]));
console.log(squareSum([]));
console.log(squareSum([]));