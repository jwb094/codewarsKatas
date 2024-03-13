function multipleOfIndex(array) {
//ATTEMPT 1
  //   var result = [];
//   for (const key in array) {
//     console.log(array[key]);
//     console.log(key);
//     if (array[key] % key == 0) {
//       result.push(array[key]);
//     } else {
//         if (array[key] == 0 && key == 0) {
//             result.push(array[key]);
//         }
//     }
//   }

//   return result;


//ATTEMPT @N****
return array.filter((value,index) => value % index == 0 || value == 0 & index == 0);

}

//console.log(multipleOfIndex([22, -6, 32, 82, 9, 25]));
//console.log(multipleOfIndex([68, -1, 1, -7, 10, 10]));
console.log(multipleOfIndex([0,2,3,6]));
