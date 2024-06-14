<?php

function halvingSum($n) {

    $arrayOfHalves = [];
    
    $i = 0;
    while ($n >= 1) {
        
        array_push($arrayOfHalves, $n);
        $n = floor($n / 2);
    }
   // var_dump( $arrayOfHalves);
   // return;
   return (int)array_sum($arrayOfHalves);
   }

   var_dump(halvingSum(25));
   var_dump(halvingSum(127));