function arr2bin(arr){
    //GET STARTED


counter = 0;
    for (let index = 0; index < arr.length; index++) {

        ( typeof arr[index] !== "number") ? counter++ : null;
    }


  if (counter > 0) {
    return false;
  }  else{
    return arr.reduce((accumulator, currentValue) => accumulator + currentValue,0).toString(2);
  }


}

function arr2bin(arr){
return arr.filter((x) => typeof x !== "number").length > 0 ? false : arr.reduce((acc, cV) => acc + cV,0).toString(2);
}
console.log(arr2bin([1,2,"a"]));//, "11")
console.log(arr2bin([1,2]));//, "11")
console.log(arr2bin([1,2,3,4,5]));//, "1111")
console.log(arr2bin([1,10,100,1000]));//, "10001010111")