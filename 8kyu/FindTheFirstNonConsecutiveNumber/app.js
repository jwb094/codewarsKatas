function firstNonConsecutive (arr) {
//console.log(arr.length);
let result = [];
for (let index =  0; index >= arr.length; index++) {
    console.log(arr[index]);
    if (arr[index] !== undefined) {
        console.log(arr[index]);
        if(arr[index] - arr[index-1] > 1 === true){
            result.push(arr[index]);break;
        }
        
    }

   // console.log(arr[index] - arr[index-1] > 1 === true ? arr[index] : null);
   

}
 result =(result < 1) ?  null : result[0];

return result;
console.log(result);
}


console.log(firstNonConsecutive([1,2,3,4,6,7,8]));
console.log(firstNonConsecutive([1,2,3,4]));
console.log(firstNonConsecutive([-6,-5,-4,-2,-1,1,2,3]));