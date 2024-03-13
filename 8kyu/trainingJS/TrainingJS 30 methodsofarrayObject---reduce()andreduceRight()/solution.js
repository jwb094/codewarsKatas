/**
 * Solution 1
 */

function tailAndHead(arr){
    let result = [];
     for (let index = 0; index < arr.length; index++) {
      if (arr[index+1] !== undefined) {
              result.push([parseFloat(arr[index].toString().split("").pop()),parseFloat(arr[index+1].toString().split("").shift())]);

 
            }
         }

    return result.map(function(x){return x.reduce((a,b) => a+b);}).reduce((accumulator, currentValue) => accumulator * currentValue);
}


 /**
  * Solution 2
  * do while loop
  * map( reduce())reduce()
  */
 function tailAndHead(arr){

 let result = [];
    let i = 0;
do {
    if (arr[i+1] !== undefined) {
    result.push([parseFloat(arr[i].toString().split("").pop()),parseFloat(arr[i+1].toString().split("").shift())]);
    }
    i++;
} while (i < arr.length);

return result.map(function(x){return x.reduce((a,b) => a+b);}).reduce((accumulator, currentValue) => accumulator * currentValue);
}

