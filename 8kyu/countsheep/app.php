<?php

function countSheep($arr) {
    //print_r(array_sum($arr));
    return count(array_filter($arr, "odd"));
    //return 0;
  }


  function odd($var)
  {
      // returns whether the input integer is odd
      return $var === true;
  }


print_r(countSheep([true, true, true, false, true, true, true, true, true, false, true, false, true, false, false, true, true, true, true, true, false, false, true, true]));print_r("\n");
print_r(countSheep([true, false, false, null, true, true, true, null, false, null, true]));print_r("\n");
print_r(countSheep([]));print_r("\n");