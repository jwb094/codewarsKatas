function arrayConversion(arr) {
  //const chunks = [];

  let chunks = arrayIntoChunks(arr);

  for (let index = 0; index < chunks.length; index++) {
    chunks[index] = chunks[index].pop() + chunks[index].shift();
  }
;
  //chunks = arrayIntoChunks(chunks);

  chunks.reduce(
          (accumulator, currentValue) => accumulator * currentValue,
          0,
       );
       console.log(chunks)
  //   if (chunks.length > 2) {
  //      chunks = arrayIntoChunks(chunks);
  //   }

//   for (let i = 0; i < chunks.length; i++) {
//     chunks[i] = chunks[i].pop() * chunks[i].shift();
//   }


//   if (chunks.length > 2) {
//     chunks = arrayIntoChunks(chunks);

//     for (let i = 0; i < chunks.length; i++) {
//         chunks[i] = chunks[i].pop() + chunks[i].shift();
//     }
//     return chunks.pop() * chunks.shift()
  
//   }

  //
  //  

//   return chunks.reduce(
//       (accumulator, currentValue) => accumulator + currentValue,
//       0,
//    );
}

function arrayIntoChunks(givenArray) {
  const chunks = [];
  for (let i = 0; i < givenArray.length; i += 2) {
    chunks.push(givenArray.slice(i, i + 2));
  }
  return chunks;
}

// function loopArray(givenArray) {
//   const chunks = [];
//   for (let i = 0; i < givenArray.length; i += 2) {
//     chunks.push(givenArray.slice(i, i + 2));
//   }
//   return chunks;
// }

console.log(arrayConversion([1, 2, 3, 4, 5, 6, 7, 8]));
console.log(arrayConversion([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]));
console.log(arrayConversion([3, 3, 5, 5]));

// [1, 1,     = 2
//     1, 1,  = 2
//     1, 1,  =2
//     1, 1,  =2
//     1, 1,  =2
//     1, 1, =2
//     1, 1, =2
//     1, 1] =2
