<?php

function summation($n) {
    $ans =[];
    for ($i=1; $i <= $n; $i++) { 
        array_push($ans,$i);
    }

    return array_reduce($ans,"IntTotal");
}

function IntTotal($v1,$v2){
    return $v1+$v2;
}


 print_r(summation(1));
 print_r("\n");
 print_r(summation(2));
 print_r("\n");
 print_r(summation(3)); print_r("\n");
 print_r(summation(4)); print_r("\n");
 print_r(summation(5));