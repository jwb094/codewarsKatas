function pickIt(arr){
    var odd=[],even=[];
    for (let index = 0; index < arr.length; index++) {
        arr[index] % 2 == 0 ? even.push( arr[index]) : odd.push(arr[index]);
        
    }
    // odd = arr.filter((number) => number % 2  !== 0);
    // even = arr.filter((number) => number % 2  == 0);

    return [odd,even];
  }

console.log(pickIt([1,2]));//[[1],[2]]);
console.log(pickIt([1,2,3]));//[[1,3],[2]]);
console.log(pickIt([3,2,1]));//,[[3,1],[2]]);
console.log(pickIt([10,20,30]));//,[[],[10,20,30]]);
console.log(pickIt([11,21,31]));//,[[11,21,31],[]]);
console.log(pickIt([8,1,5,4,6,1,1]));//,[[1,5,1,1],[8,4,6]]);