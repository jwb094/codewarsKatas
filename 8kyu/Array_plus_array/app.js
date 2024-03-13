function arrayPlusArray(arr1, arr2) {
    
    return (arr1.reduce((accumlator,currentValue) =>accumlator+currentValue) + arr2.reduce((accumlator,currentValue) =>accumlator+currentValue)) ;
    //return arr1 + arr2; //something went wrong
  }


  console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]))