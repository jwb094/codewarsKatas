function tailAndHead(arr){
    //coding here...
    // console.log(arr);
    
let result = [];
    let i = 0;
do {
    if (arr[i+1] !== undefined) {
    result.push([parseFloat(arr[i].toString().split("").pop()),parseFloat(arr[i+1].toString().split("").shift())]);
    }
    i++;
   
} while (i < arr.length);

/*for (let index = 0; index < arr.length; index++) {

        if (arr[index+1] !== undefined) {
            result.push([parseFloat(arr[index].toString().split("").pop()),parseFloat(arr[index+1].toString().split("").shift())]);
        }
 
     }*/

return result.map(function(x){return x.reduce((a,b) => a+b);}).reduce((accumulator, currentValue) => accumulator * currentValue);
    //console.log(result.map(function(x){return x.reduce((a,b) => a+b);}).reduce((accumulator, currentValue) => accumulator * currentValue));
    // let tailsAndHeadAdded =  result.map(function(x){
    
    //     return x.reduce((a,b) => a+b);
    //  });
   

   
    //  const tailsAndHeadFinalResult = tailsAndHeadAdded.reduce((accumulator, currentValue) => accumulator * currentValue);
    //   console.log(tailsAndHeadFinalResult);
  }

  console.log(tailAndHead([123,456,789,12,34,56,78]));
console.log(tailAndHead([1,2,3,4,5]));
    //[3 -4]
    // [6 - 7]  
    // [9-1]
    // [ 2 - 3 ]
    // [ 4 - 5 ]
    // [ 6 - 7 ]



    //     // result.push([parseFloat(arr[index].toString().split("").pop()),parseFloat(arr[index+1].toString().split("").shift())]);
        //console.log(`${index} ${parseFloat(arr[index].toString().split("").pop())}  ${parseFloat(arr[index+1].toString().split("").shift())}`);

             //  lettailAndHead = arr.map(function(a,b){
    //     console.log(b);

    //    return (b == 0 ) ? [ parseFloat(a.toString().split("").pop()), parseFloat(arr[b+1].toString().split("").shift())] : [parseFloat(a.toString().split("").shift()),parseFloat(a.toString().split("").pop())]

    //  })
    //  console.log(lettailAndHead);
     // for (let index = 0; index < arr.length; index++) {
    //     console.log(arr[index])
    //     lettailAndHead = arr.map(function(a,b){

    //     })
    // }
    // lettailAndHead = arr.map(function(a,b){

  
    //     console.log(arr[b+1])
    //     //console.log(parseFloat(a.toString().split("").pop()));
    //     //console.log(parseFloat(b.toString().split("").shift()));
    //     return a.toString();
    //     //console.log(b);
    // });
    // console.log(lettailAndHead);