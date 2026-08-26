<?php
 

 function divisibleBy(array $numbers, int $divisor): mixed {
  // write some code
  $divisibleNumbers = array();
    if(count($numbers) === 0 ){
        return false;
    }

  for($index = 0; $index < count($numbers); $index++){
    if($numbers[$index] % $divisor === 0){
        $divisibleNumbers[] = $numbers[$index];
    }

  }
    return $divisibleNumbers;

/**
 * alternative
 * return array_values(array_filter($numbers, 
    function($n) use ($divisor) { 
         return $n % $divisor == 0;
    })); 
 */


}
