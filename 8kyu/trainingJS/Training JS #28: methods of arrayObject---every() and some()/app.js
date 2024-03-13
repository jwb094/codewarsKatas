function mirrorImage(arr){
    //coding here...

    var a=0,b=0;
    arr.some((x,i)=>{
      a=arr[i];  //or a=x
      b=arr[i+1];
      if(b !== undefined){
        return a === b || a === parseFloat(b.toString().split('').reverse().join(''));
      }
    })

    return (a === undefined || b  === undefined)? [-1,-1] : [a,b]; 
    console.log(a,b)

    //console.log(arr) 
// var a,b=0;
//     arr.some((x,i)=>{
//         a=arr[i];  //or a=x
//         b=arr[i+1];
//         console.log(`${i} ${a}`);
//        console.log(`${x} ${b}`);
//       // console.log(`${a} ${parseFloat(b.toString().split('').reverse().join(''))}`)
//       })


   // console.log(arr);
//     arr.some((index)=>{
//     a=index;
//     b=arr[index+1];
//     console.log(a);
//     console.log(b);

//    // console.log(`${a} ${parseFloat(b.toString().split('').reverse().join(''))}`);
//   //console.log(`${parseFloat(arr[i].toString().split('').reverse().join(''))}`);

//   return a === parseFloat(b);
// });


//console.log(l);
  }


console.log(mirrorImage([11,22,33,33,22,11]));
console.log(mirrorImage([454,86,57,75,16,88]));
console.log(mirrorImage([454,0,57,0,16,88]));