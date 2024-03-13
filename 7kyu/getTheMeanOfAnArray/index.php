<?php

function get_average($a) {
    // Write your code here

    var_dump(floor(array_reduce($a,"IntTotal") / count($a)));
    
    return (int)floor(array_reduce($a,"IntTotal") / count($a));
    
  }

  function IntTotal($v1,$v2){
    return $v1+$v2;
}



/*2*/var_dump(get_average([2, 2, 2, 2]));
/*3*/var_dump(get_average([1, 2, 3, 4, 5]));
/*1*/var_dump(get_average([1, 1, 1, 1, 1, 1, 1, 2]));