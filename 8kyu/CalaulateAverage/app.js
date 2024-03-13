function findAverage(array) {
    // your code here
return  array.length !== 0 ? (array.reduce((accumulator, currentValue) => accumulator + currentValue )) / array.length : 0 ; 

    let sumWithInitial = (array.reduce((accumulator, currentValue) => accumulator + currentValue )) / array.length;

console.log(sumWithInitial);
//return 0;
  }


  console.log(findAverage([1,1,1]));
  console.log(findAverage([1,2,3]));
  console.log(findAverage([1,2,3,4]));