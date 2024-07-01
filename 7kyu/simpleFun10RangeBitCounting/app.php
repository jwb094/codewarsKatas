<?php


function range_bit_count(int $a, int $b) {
    // Coding and coding ... 
    $range = array();
    for ($i=$a; $i <= $b; $i++) { 
        array_push($range,$i);
    }

   return array_sum(array_map(function ($d){
        return  (int)strlen(str_replace("0",'',(string)decbin($d)));
    },$range));

  }


var_dump( range_bit_count(2,7));