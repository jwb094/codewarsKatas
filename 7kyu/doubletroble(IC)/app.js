// function trouble(x, t) {


//   const result = x.filter((value,item) =>  console.log() );

//   let arr = [];
//   for (let f = 0; f < x.length; f++) {
//  //   console.log(x[f]);
//     if (x[f] + x[f + 1] == t) {
//         //console.log(x[f + 1]);
//       arr.push(x[f + 1]);
//     }
//   }
//   console.log(arr);
//   for (let f_ = 0; f_ < x.length; f_++) {
//     for (let index = 0; index < arr.length; index++) {
//       if (x[f_] === arr[index]) {
//         x.splice(f_, 1);
//       }
//     }
//   }
//   return x;
//   //console.log(x);

//   // const result = x.filter(function (value,index) {

//   //    // console.log(x[index]  + x[index+1] === t);

//   //     if (x[index]  + x[index+1] === t) {
//   //         console.log( value);
//   //        // x.splice(value, 1);
//   //     }
//   // return x;
//   //     // ifi(index + ){

//   //     // }

//   // });

//   // console.log(result);
//   //console.log(x);
//   // let arr = [];
//   // const chunkSize = 2;
//   // const chunks = [];

//   // for (let i = 0; i < x.length; i += chunkSize) {
//   //   const chunk = x.slice(i, i + chunkSize);
//   //   chunks.push(chunk);
//   // }

//   // for (const key in chunks) {
//   // //console.log(chunks[key]);

//   // let sum = chunks[key].reduce((accumulator, currentValue) => accumulator + currentValue);
//   // console.log(sum);
//   // }

//   /*
// for (let index = 0; index < x.length; index++) {

//     let element = x[index];

//     let nextInline = x[index+1];


//     if (element + nextInline === t) {
//      console.log(x[nextInline]);
//      arr.push(x[nextInline]);
//     }

    
// }
// */
//   // for (let index = 0; index < x.length; index++) {
//   //     let element = x[index];

//   //     let prevInline = x[index-1];
//   //     console.log("index" + x.indexOf(element) + element);
//   //     console.log();
//   //     //console.log("index" + x.indexOf(element));
//   //     //console.log("prev" + prevInline);
//   //     //console.log(prevInline);

//   // }
//   //console.log(arr);
//   //console.log(x);
//   // let i=0;
//   // while (i < x.length) {

//   //     console.log(x.indexOf(x[i]));
//   //     i++;
//   // }

//   // for (let index = 1; index < x.length; index++) {
//   //     const element = x[index];
//   //     //console.log(element);
//   //     if (x[index]  + x[index-1] === t) {
//   //         console.log(x.indexOf(x[index])  + x.indexOf(x[index-1]) + "y");
//   //     }

//   // }

//   // for (let key in x) {
//   //     console.log(x[key]);
//   //     console.log(x[key++]);
//   // }
// }

// //console.log(trouble([1, 3, 5, 6, 7, 4, 3], 7));
// //console.log(trouble([4, 1, 1, 1, 4], 2));
// console.log(trouble([2, 6, 2], 8));
