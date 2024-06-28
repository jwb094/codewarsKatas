<?php

function sum_mix($a) {
    // Your code here

    return (array_sum(array_map(function ($d){
        return   (int)$d;
    },$a)));

}


var_dump(sum_mix([9, 3, '7', '3']));//22
var_dump(sum_mix(['5', '0', 9, 3, 2, 1, '9', 6, 7]));//42
var_dump(sum_mix(['3', 6, 6, 0, '5', 8, 5, '6', 2, '0']));//41