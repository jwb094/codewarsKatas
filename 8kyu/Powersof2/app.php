<?php

function powersOfTwo(int $n){
    $result = array();

    for($index = 0; $index <= $n; $index++){
    // Either
     $result[] = 2 ** $index;
       // Or
     //array_push($result,2 ** $index);

    }

  return $result;
}  

var_dump(powersOfTwo(0));
var_dump(powersOfTwo(1));
var_dump(powersOfTwo(4));


?>