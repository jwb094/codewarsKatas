<?php

function get_average($a) {
    // Write your code here
    return  round(array_reduce($a,"IntTotal") / count($a));
    
  }

  function IntTotal($v1,$v2){
    return $v1+$v2;
}


  print_r(get_average([2, 2, 2, 2]));print_r("\n");
  print_r(get_average([1, 2, 3, 4, 5]));print_r("\n");
  print_r(get_average([1, 1, 1, 1, 1, 1, 1, 2]));