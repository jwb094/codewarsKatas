// Task
// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

// Mind the input validation.

// Example
// { 6, 2, 1, 8, 10 } => 16
// { 1, 1, 11, 2, 3 } => 6

function sumArray(array) {
 if(array === null || array === undefined) {return 0};
 if(array.length === "") {return 0};
 if(array.length === 1) {return 0};
 if(array.length === 2) {return 0 };

return array.sort((a,b)=>{
	return a > b ? 1 : -1; // asc
}).slice(1,-1)
  .reduce((previousValue,currentValue)=> previousValue + currentValue ,0);
}