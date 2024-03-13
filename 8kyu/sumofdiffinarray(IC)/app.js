function sumOfDifferences(arr) {
arr.sort((a, b) => (a > b ? -1 : 1))

    let firsttwo = arr.slice(0, 2);
    let lasttwo = arr.slice(-2);
    console.log(firsttwo);
    console.log(lasttwo);

    // firsttwo = firsttwo.reduce((accumulator, currentValue) => {
    //     return accumulator + currentValue
    //   },0);
    //   lasttwo = lasttwo.reduce((accumulator, currentValue) => {
    //     return accumulator + currentValue
    //   },0);
    //   console.log(firsttwo);
    //   console.log(lasttwo);
// console.log((firsttwo.shift() - firsttwo.slice(-1)) + (lasttwo.shift() - lasttwo.slice(-1)));
return (firsttwo.shift() - firsttwo.slice(-1)) + (lasttwo.shift() - lasttwo.slice(-1)); 
}

console.log(sumOfDifferences([1, 2, 10]));