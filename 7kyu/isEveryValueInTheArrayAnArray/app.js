function arrCheck(arr){

    for (let index = 0; index < arr.length; index++) {
        //const element = array[index];
        
        console.log( arr[index])
    }

   // console.log(arr.filter((x) => typeof x !== "array"));
}


console.log(arrCheck([]));//, true);
console.log(arrCheck([['string']]));//, true);
console.log(arrCheck([[],{}]));//, false);
console.log(arrCheck([[1],[2],[3]]));//, true);
console.log(arrCheck(['A', 'R', 'R', 'A', 'Y']));//, false);