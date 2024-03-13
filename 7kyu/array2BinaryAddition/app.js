function arr2bin(arr){
    //GET STARTED

//console.log((3).toString(2))
// console.log(arr.includes(String))
    //console.log( arr.reduce((accumulator, currentValue) => accumulator + currentValue,0));

    //console.log(arr.filter((x) => typeof x !== "number").length > 0);

    console.log( )
return arr.filter((x) => typeof x !== "number").length > 0 ? false : arr.reduce((acc, cV) => acc + cV,0).toString(2);

/*
counter = 0;
    for (let index = 0; index < arr.length; index++) {
//        ( typeof arr[index] === String || typeof arr[index] === Boolean || typeof arr[index] === Object || typeof arr[index] === Function) ? counter++ : null;
        // const element = array[index];
        //console.log(typeof arr[index]);
       // ( typeof arr[index] !== "number") ? counter++ : null;

        ( typeof arr[index] !== "number") ? counter++ : null;
    }
   // console.log(counter);

  if (counter > 0) {
    return false;
  }  else{
    return arr.reduce((accumulator, currentValue) => accumulator + currentValue,0).toString(2);
  }*/


}

console.log(arr2bin([1,2,"a"]));//, "11")
console.log(arr2bin([1,2]));//, "11")
console.log(arr2bin([1,2,3,4,5]));//, "1111")
console.log(arr2bin([1,10,100,1000]));//, "10001010111")