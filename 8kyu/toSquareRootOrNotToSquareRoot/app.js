function squareOrSquareRoot(array) {
    //return array;  

//    console.log(array.map((x) => console.log(x)));
//console.log(Math.sqrt(9 % 2));
//return array.map((x) =>   x % 2 === 0 ?  Math.sqrt(x) : x * x);
/*for (let index = 0; index < array.length; index++) {
const element = array[index];
let num = Math.sqrt(array[index]);
console.log( Math.sqrt(array[index])+  " "+Math.floor(array[index]));
console.log( Number.isInteger(Math.sqrt(array[index])) );


}*/

return array.map((x) =>   Number.isInteger(Math.sqrt(x))  ? Math.sqrt(x)  : x * x) ;

//If originally the squar root of given umber is not whole then it doesnt have a sq root 
  }


  console.log(squareOrSquareRoot(input= [ 4, 3, 9, 7, 2, 1 ]));
  var expected = [ 2, 9, 3, 49, 4, 1 ];
  console.log(squareOrSquareRoot(input= [ 100, 101, 5, 5, 1, 1 ]));
  var  expected = [ 10, 10201, 25, 25, 1, 1 ];
  console.log(squareOrSquareRoot(input= [  1, 2, 3, 4, 5, 6 ]));
  var  expected = [ 1, 4, 9, 2, 25, 36 ];