function minSum(arr) {
  // your code here
  let sum =[];

arr.sort(function(a, b){return a - b});
//var half_length = Math.ceil(arr.length / 2);    
var leftSide = arr.slice(0,Math.ceil(arr.length / 2));
var rightSide = arr.slice(Math.ceil(arr.length / 2),arr.length).sort(function(a, b){return b - a});


for (let index = 0; index < leftSide.length; index++) {
    sum.push(leftSide[index] * rightSide[index])
}

return sum.reduce((accumulator, currentValue) => accumulator + currentValue,0);
// do {

     console.log(leftSide[index]);
    console.log(rightSide[index]);
//     //sum.push(leftSide[index] * rightSide[index]);
//     index++;
//     //console.log(index);
// } while (index === leftSide.length);

console.log(sum);
//console.log(arr.slice((arr.length / 2)),arr.length);



//  console.log(arr.slice(0,(arr.length / 2)));
//  console.log(arr.slice((arr.length / 2)),arr.length);


//   for (let i = 0; i < arr.length; i += chunkSize) {
//     const chunk = arr.slice(i, i + chunkSize);
//     chunks.push(chunk);
//   }

//   console.log(chunks.sort());
}

console.log(minSum([5, 4, 2, 3]));

console.log(minSum([12,6,10,26,3,24]));
//3,6,10,12,24,26
console.log(minSum([9,2,8,7,5,4,0,6]));
//0,2,4,5,6,7,8,9
//9*0 | 