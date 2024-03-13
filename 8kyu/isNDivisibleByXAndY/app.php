<?php

function is_divisible($n, $x, $y) {
    return ($n % $x == 0 && $n % $y == 0) ? true : false ;
  }    
  
 print_r(is_divisible(3, 3, 4));
 print_r(is_divisible(12, 3, 4));
 print_r(is_divisible(8, 3, 4));
 print_r(is_divisible(48, 3, 4));