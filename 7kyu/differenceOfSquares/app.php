<?php


function difference_of_squares(int $n) {
    // Your code here
  $squareOfSumOfNumbers = 0;
  $sumOfSquareOfNumbers = 0;


  for ($i=0; $i <= $n; $i++) { 
    # code...
    $squareOfSumOfNumbers = $squareOfSumOfNumbers + $i;
    $sumOfSquareOfNumbers = $sumOfSquareOfNumbers + pow($i,2);
  

  }
// print_r(pow($squareOfSumOfNumbers,2));
// print_r($sumOfSquareOfNumbers);

//** TIPS from other solution*/
$range = range(1,$n);

$range = array_sum($range);
print_r($range);
//
return pow($squareOfSumOfNumbers,2) - $sumOfSquareOfNumbers;


}


var_dump(difference_of_squares(10));