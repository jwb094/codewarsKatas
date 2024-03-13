function sumSquares(array) {
    const  iV = 0;
  return  array.reduce((acc,cV)=>acc+cV**2,iV);
//  return  array.reduce((acc,cV)=>acc+cV*cV,0);
    // var result = 0;
    // for (let i = 0; i < array.length; i++) {
    //   result += array[i] ** 2;
    // }
    // return result;

}


  console.log(sumSquares([1,2,3,4,5]));//, 55);
  console.log(sumSquares([7,3,9,6,5]));//, 200);
  console.log(sumSquares([11,13,15,18,2]));//, 843);
  console.log(sumSquares([-5,-4,-3,-2,-1,0,1,2,3,4,5]));//, 110);