function mergeArrays(a, b) {
    // your code here
 
    a = a.concat(b);
    let result = a.filter(function(item,pos){
       return a.indexOf(item) == pos;
     }).sort(function(a,b){ return a  -b});
   return result;
      
      //a.concat(b)

    console.log(result);
    return Array(result);

    //return new Set([...a,...b].sort());

    //attempt 1
    a = a.concat(b);
    return a = a.filter(function(item,pos){
        return a.indexOf(item) == pos;
      }).sort();
}


console.log(mergeArrays([1, 3, 5], [2, 4, 6]));
console.log(mergeArrays([2,4,8], [2, 4, 6]));