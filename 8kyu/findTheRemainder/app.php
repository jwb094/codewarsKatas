<?php

function remainder($a, $b) {

    ($a > $b ) ? $largest = $a : $largest = $b ;

    ($largest === $a) ? $smallest = $b : $smallest = $a ;

    // Divide the larger argument by the smaller argument and return the remainder

    if (($a === 1 || $a === 0) && ($b === 1 || $b === 0)) {
    return null;
    } else{
        return $largest % $smallest;
    }
    //var_dump($largest);
    //$result = $largest % $smallest;
   // var_dump($result);
  //  return ($largest % $smallest = 0) ? null :  $largest % $smallest;
}


//print_r(remainder($a = 17, $b = 5));exit;

//print_r(remainder($a = 13, $b = 72));exit;

print_r(remainder($a = 1, $b = 0));exit;

print_r(remainder($a = 0, $b = 0));;