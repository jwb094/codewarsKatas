<?php


function solution($number){
    $multiples = array();

    
    for ($i=1; $i < $number; $i++) { 
        if ($i % 3 == 0 || $i % 5 == 0) {
            array_push($multiples,$i);
        }
    }


return    array_sum($multiples);
//var_dump(array_sum($multiples));
/*
$range = range(1,9);
// var_dump($range);
 return array_sum(array_filter($range, function($k) {
     if ($k % 3 === 0 || $k % 5 === 0) {
         return $k;
     }
 }));
*/}




var_dump(solution(10));