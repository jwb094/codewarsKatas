// function pipeFix(numbers){
// // console.log(numbers.splice(0, 1).shift());
// // console.log(numbers.pop());
// console.log(numbers);
// const first =numbers.splice(0, 1).shift();
// const last =numbers.pop();

// for (let index = 1; index <= last; index++) {
//  //   const element = array[index];
// //  console.log(numbers.indexOf(index) );
// //  console.log(numbers.indexOf(index[index]));
// if (!numbers.includes(index)) {
//     numbers.push(index);
// }

//    // console.log(numbers[index]);
// }
// //console.log(numbers.sort(function(a, b){return a-b}));
// return numbers.sort(function(a, b){return a-b});
// }

function pipeFix(numbers) {

  const first = numbers.splice(0, 1).shift();
  const last = numbers.pop();
  for (let index = 1; index <= last; index++) {
    if (!numbers.includes(index)) {
      numbers.push(index);
    }
  }
   numbers.sort(function (a, b) {
    return a - b;
  });
  return numbers;
}

console.log(pipeFix([1, 2, 3, 5, 6, 8, 9]));
console.log(pipeFix([1, 2, 3, 12]));
