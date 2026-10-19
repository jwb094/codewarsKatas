// function powersOfTwo(n){
//   result =[];
//   for(index =0; index <= n ; index++){
//     // console.info(index + " " +  2);
//     result.push(2 ** index);
//   }
//   return result;
//   // return []
// }


function powersOfTwo(n){
     return  Array.from({length:n+1}, (_, i) =>  2 ** i);
}