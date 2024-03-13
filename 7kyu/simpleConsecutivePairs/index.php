<?php

function pairs(array $arr)  {
    $counter =0;

   $arr = array_chunk($arr, 2);

   foreach ($arr as $key => $value) {
    if (count($value) !== 2) {
        unset($arr[$key]);
    }
   }
   for ($i=0; $i < count($arr); $i++) { 
    if ($arr[$i][0] > $arr[$i][1]) {
    ($arr[$i][0] - $arr[$i][1] === 1) ? $counter++ : null ;
    }
    if ($arr[$i][0] < $arr[$i][1]) {
     ($arr[$i][1] - $arr[$i][0] === 1) ? $counter++ : null ;
    }

   }
   return $counter;
}

var_dump(pairs([1,2,5,8,-4,-3,7,6,5]));//3
var_dump(pairs([21, 20, 22, 40, 39, -56, 30, -55, 95, 94]));//2
var_dump(pairs([81, 44, 80, 26, 12, 27, -34, 37, -35]));//0
var_dump(pairs([-55, -56, -7, -6, 56, 55, 63, 62]));//4
var_dump(pairs([73, 72, 8, 9, 73, 72]));//3