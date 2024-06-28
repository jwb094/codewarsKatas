<?php
//TODO
function factorial(int $n) {
    // Your code here
    if ($n < 0 && $n > 12) {
        throw new RangeError($n . "must between 0 and 12 ");
    }
    if ($n === 0) {
        return 1;
        //"0! sh;ould equal 1";
    }
    if ($n === 1) {
        return 1; 
        //'1 should equal 1';
    }
    $factorialRange = range(1,$n);    

    $factorial = 1;
    for ($i=0; $i < count($factorialRange); $i++) { 
        $factorial =  $factorial * $factorialRange[$i];  
    }
return $factorial;
   //  print_r($factorial);
}


var_dump(factorial(0));//, '0! should equal 1');
var_dump(factorial(1));//, '1! should equal 1');
var_dump(factorial(2));//, '2! should equal 2');
var_dump(factorial(3));//, '3! should equal 6');
var_dump(factorial(4));//, '3! should equal 6');
var_dump(factorial(5));//, '3! should equal 6');