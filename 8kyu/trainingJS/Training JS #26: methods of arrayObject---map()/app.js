function isolateIt(arr){
    //coding here...
   return arr.map(function(x) { 
    if(x.length%2==0) {return x.slice(0,x.length/2)+"|"+ x.slice(x.length/2)}
    if(x.length%2!==0) {return x.slice(0,x.length/2)+"|"+ x.slice((x.length/2)+1)}
/*    if(x.length%2==0)    {return x.substr(0,2).concat("|") + x.substr(2,4);}
    if(x.length%2!==0)    {return x.substr(0,2).concat("|") + x.substr(3,5);}*/
      }  );
console.log(map1)
  }

console.log(isolateIt(["abcd","efgh"]));// , ["ab|cd","ef|gh"]);
console.log(isolateIt(["abcde","fghij"]));// , ["ab|de","fg|ij"]);
console.log(isolateIt(["1234","56789"]));// , ["12|34","56|89"]);
// function isolateIt(arr){
//     //coding here...
//     const map1 = arr.map(function(x) {
//     //console.log(x.length / 2)
//         if(x.length % 2 == 0){
//          return   x.substr(0,2).concat("|") + x.substr(2,4)
//         } else{
//             let middle = Math.floor(x.length / 2);
//             x=x.split("");
//             x[middle] = "|";
//             x=x.join("");
//             return x;
//         }
//     //x.substr(0,2).concat("|") + x.substr(2,4)
// });
// console.log(map1)
//   }