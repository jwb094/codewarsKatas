<?php

function quarterOf(int $month) {
  // Your code here
    $quarterIndex = 0;
    $months = [
        [1,2,3],
        [4,5,6],
        [7,8,9],
        [10,11,12],
    ];

    foreach ($months as $key => $quarterValues) {
        if(in_array($month,$quarterValues)){
            $quarterIndex = $key +1;
        }
    }
    return $quarterIndex;
}

var_dump(quarterOf(2));
var_dump(quarterOf(6));
var_dump(quarterOf(7));