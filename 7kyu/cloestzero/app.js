function closest(arr){
   let output = [];


  if(!arr.length){
    return 0;
  }   



  let closest =0;
  for (let i = 0; i < arr.length ; i++) {
    if (closest === 0) {
        closest = arr[i];
    } else if (arr[i] > 0 && arr[i] <= Math.abs(closest)) {
        closest = arr[i];
    } else if (arr[i] < 0 && - arr[i] < Math.abs(closest)) {
        closest = arr[i];
    } else if(arr[i] === 0){
      closest = arr[i];
    }
}

return closest;
    // arr.forEach(element => {
    //     output.push({"element": element ,answer: element - 0});
    // });
    // output.sort(function(a, b){return  b.answer > a.answer})
    // console.log(output);
    // // return null if it is not possible to return 1 unique closest value
    // return 0;
  }



  console.log(closest([10, 3, 9, 1]));
  console.log(closest([2, 4, -1, -3]));
  console.log(closest([13, 0, -6]));