
// function pipeFix(numbers) {

//   const first = numbers.splice(0, 1).shift();
//   const last = numbers.pop();
//   for (let index = 1; index <= last; index++) {
//     if (!numbers.includes(index)) {
//       numbers.push(index);
//     }
//   }
//    numbers.sort(function (a, b) {
//     return a - b;
//   });
//   return numbers;
// }

// console.log(pipeFix([1, 2, 3, 5, 6, 8, 9]));
// console.log(pipeFix([1, 2, 3, 12]));


function between(a, b) {

  numbers = [];
  for (let index = a; index <= b; index++) {
    numbers.push(index);
     }
     return numbers;
}


console.log(between(1, 4));