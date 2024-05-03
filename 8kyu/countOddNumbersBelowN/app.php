<?php

function oddCount($n) {
  $oddNumberBelowN = array();
    for ($i= 0 ; $i < $n ; $i++) {
         if ($i % 2 !== 0) {
        array_push($oddNumberBelowN, $i);
         }
    }
    return count($oddNumberBelowN);
}







var_dump(oddCount(15));
var_dump(oddCount(15023));