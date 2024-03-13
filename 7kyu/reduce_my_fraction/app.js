// function reduce(fraction) {
//   //simplify me!

//    //console.log(fraction);
//    //let numerator = fraction.shift();
//    //let denominator = fraction.pop();

//   //let numerator_factors= [];
//   //let denominator_factors= [];
// //  let factors = [];
//   // for (let index = 0; index <= fraction.length ; index++) {
//   //     console.log(fraction[index]);
//   //     (fraction[index] % index == 0) == true ? factors.push(index) : null;
//   // }
//   let factors = [];
//   for (const key in fraction) {
//     for (let index = 1; index <= fraction[key]; index++) {
//       (fraction[key] % index == 0) == true ? factors.push(index) : null;
//     }
//   }
//   //console.log(factors);
//   factors = factors.filter((item, index) => factors.indexOf(item) != index);
//   //console.log(factors);
//    let cmnHighestFactor = factors.pop();
//    //console.log(cmnHighestFactor);

//    let numerator = fraction.shift() / cmnHighestFactor;
//    let denominator = fraction.pop() / cmnHighestFactor;
//    //console.log(numerator);
//    //console.log(denominator);

//    return [numerator,denominator];
// //   console.log(cmnHighestFactor);

// //let numeratorSimpleForm = factors.shift() % cmnHighestFactor;
//   //console.log(numeratorSimpleForm);

// }

function reduce(fraction) {
  //simplify me!

  let factors = [];
  for (const key in fraction) {
    for (let index = 1; index <= fraction[key]; index++) {
      (fraction[key] % index == 0) == true ? factors.push(index) : null;
    }
  }
//Does it have two different indexwa or not
console.log(factors);
  factors = factors.filter((item, index) => factors.indexOf(item) != index);

  let cmnHighestFactor = factors.pop();
  return [
    fraction.shift() / cmnHighestFactor,
    fraction.pop() / cmnHighestFactor,
  ];
}

console.log(reduce([60, 20]));
