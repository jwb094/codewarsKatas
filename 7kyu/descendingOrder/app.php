<?php


function descendingOrder(int $n)
{
    // Replace with your code

    if (strlen((string)$n) === 1) {
        return $n;
    }
  //  $n = (string) $n;
    $n = str_split((string) $n);


    rsort($n, SORT_NUMERIC);
    $p = (int) implode("", $n);
    return $p;
}



var_dump(descendingOrder(5));
var_dump(descendingOrder(0));
var_dump(descendingOrder(15));
var_dump(descendingOrder(1021));
var_dump(descendingOrder(123456789));
