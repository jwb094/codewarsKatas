<?php

function remainder($a, $b) {
  // Divide the larger argument by the smaller argument and return the remainder
    ($a > $b ) ? $largest = $a : $largest = $b ;

    ($largest === $a) ? $smallest = $b : $smallest = $a ;

  

    if (($a === 1 || $a === 0) && ($b === 1 || $b === 0)) {
    return null;
    } else{
        return $largest % $smallest;
    }

}


print_r(remainder($a = 17, $b = 5));exit;

print_r(remainder($a = 13, $b = 72));exit;

print_r(remainder($a = 1, $b = 0));exit;

print_r(remainder($a = 0, $b = 0));;