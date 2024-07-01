<?php


function grow($a) {
    // Your code here
    return array_product($a);
  }



 var_dump(grow([1, 2, 3]));//6, 
 var_dump(grow([4, 1, 1, 1, 4]));//16
 var_dump(grow([2, 2, 2, 2, 2, 2]));//64,