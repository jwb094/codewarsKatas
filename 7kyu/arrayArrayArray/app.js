function explode(x){
    let output = new Array();
    const isString = x.filter((ele) => typeof ele === 'string');
    const isInteger = x.filter((ele) => Number.isInteger(ele));

    //if both ar numbers
   if (!Number.isInteger(x[0]) && !Number.isInteger(x[1])) {
    return "Void!";
   }
   //if both r integer

   if (isInteger.length ===  x.length) {

    if (isInteger[0] === 0 ) {
        return [];
    }
    for (let index = 0; index < isInteger[0]+isInteger[1]; index++) {
        output.push([isInteger[0],isInteger[1]]); 
        
    }
}
    if (isString.length === isInteger.length) {
         //console.info('1 of each');
        if (!Number.isInteger(x[0])) {
           // console.info(x[0]);
            for (let index = 0; index < x[1]; index++) {
                output.push([x[0],x[1]]); 
            }
        }
        if (Number.isInteger(x[0])) {
           // console.info(x[0]);
            for (let index = 0; index < x[0]; index++) {
                output.push([x[0],x[1]]); 
            }
        }
    }

return output;
}



console.info(explode([9, 3]));
// [[9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3]]
console.info(explode(["a", 0]));
console.info(explode(["a", "b"]));

console.info(explode(["a", 3]));
//[['a', 3], ['a', 3], ['a', 3]]

console.info(explode([6,"c"]));
//, [[6, 'c'], [6, 'c'], [6, 'c'], [6, 'c'], [6, 'c'], [6, 'c']]