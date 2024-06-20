<?php


function stray($arr)
{
  $strayNumberFound = 0;
   foreach(array_count_values($arr) as $val => $c){
       if($c < 2) $strayNumberFound = $val;
   }
   return  $strayNumberFound;
}

var_dump(stray([1,1,2]));
var_dump(stray([4, 2, 2, 2, 2]));
//var_dump(stray([4, 4, 4, 5, 4, 4, 4]));