function infiniteLoop(arr, d, n) {
  //coding here...
  const arrLengths = [];
  const arrLengthsDuplicate = [];
  const chunks = [];
  for (let index = 0; index < arr.length; index++) {
    arrLengths.push(arr[index].length);
    arrLengthsDuplicate.push(arr[index].length);
  }

  arr = arr.flat();
  if (d === "left") {
    var moveToTheEnd = arr.splice(0, n);
    arr.push(moveToTheEnd);
    arr.flat();
  }

  if (d === "right") {
    var lastEl = arr.pop();
    arr.unshift(lastEl);
    arr.flat();
  }
  arr = arr.flat();
  console.log(arrLengths);

// //   for (let i = 0; i <= arr.length; i += arrLengths[i]) {
// //     console.log(i);

// //   }
//   console.log(arr);
//   for (let i = 0; i < arrLengths.length; i++) {
 
//     console.log(`${i} ${arrLengths[i]}`);
//     console.log(i);

//   }
// //   for (let i_ = 0; i_ <= arrLengthsDuplicate.length; i_++) {
// //     const index =0;

// //     for (let i = 0; i <= arr.length; i += arrLengths[i]) {
  
// //    //   index = i;
// //     //  console.log(i);
   
// //       // const chunk = arr.slice(i, i + arrLengths[i]);
// //       // chunks.push(chunk);
      
// //     }
// //     console.log(i_ += arrLengths[i_]);
// //   //  console.log(arr.slice(i_ += arrLengthsDuplicate[i_], arrLengths[i_]));
// //     console.log(arrLengthsDuplicate[i_]);
// //     //console.log(index);
// //    // 
  
}

//console.log(infiniteLoop(    [[1, 2, 3],[4, 5, 6],[7, 8, 9],],"left",1)); //, [[2,3,4],[5,6,7],[8,9,1]]);
//console.log(infiniteLoop( [[1,2,3],[4,5,6],[7,8,9]],"right",1));// , [[9,1,2],[3,4,5],[6,7,8]]);
console.log(
  infiniteLoop(
    [
      [1, 2],
      [3, 4, 5, 6],
      [7, 8, 9, 10],
    ],
    "left",
    2
  )
); //  , [[3,4],[5,6,7,8],[9,10,1,2]]);


//OVERCOMPLICATED 