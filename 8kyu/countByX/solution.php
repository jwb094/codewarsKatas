<?php


function countBy($x, $n) {
    $z = [];
    $index = 1;
    do {
        if ($index % $x === 0) {
            array_push($z,$index);
        }
        $index++;
    } while (count($z) < $n);
    return $z;
}




var_dump(countBy(1,10));
var_dump(countBy(2,5));