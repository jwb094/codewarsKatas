<?php



function multiples(int $m, float $n): array {
    $multiples = array();
    for ($i=1; $i <= $m; $i++) { 
    array_push($multiples,$i * $n);
    }
    return $multiples;

}



var_dump( multiples(3, 5));