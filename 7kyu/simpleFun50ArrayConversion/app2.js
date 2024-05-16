function arrayConversion(arr) {

    arr = reduceArrayToFour(arr,"+");
    arr = reduceArrayToFour(arr,"*");
    if (arr.length > 2) {
        arr = reduceArrayToFour(arr,"+");
        arr = reduceArrayToFour(arr,"*");
        return arr[0];
    }
0
    let result = arr.length === 1 ? arr : arr = reduceArrayToFour(arr,"+"); 
    console.log(result[0]);

}


const reduceArrayToFour = (givenArr,operator) => {
    let sum ;
    return givenArr.reduce((accumulator, currentValue, currentIndex) => {
        // Every second element, sum the current and previous element
        if (currentIndex % 2 === 1) {
            if (operator === "+") {          
                 let sum = givenArr[currentIndex]  + givenArr[currentIndex - 1];
                 accumulator.push(sum);
            }
            if (operator === "*") {  
                let sum = givenArr[currentIndex]  * givenArr[currentIndex - 1];
                accumulator.push(sum);
            }
        
        }
        return accumulator;
    }, []);
};


console.log(arrayConversion([1, 2, 3, 4, 5, 6, 7, 8]));
console.log(arrayConversion([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]));
console.log(arrayConversion([3, 3, 5, 5]));