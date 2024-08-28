<?php

function sequence_sum(int $begin, int $end, int $step) {
    $incrementValue=$begin;
    $values= array();
    do {
        array_push($values,$incrementValue);
        $incrementValue += $step;
    } while ($incrementValue <= $end);

return ($begin > $end) ? 0 : array_sum($values) ;

}

var_dump(sequence_sum(2, 6, 2));
var_dump(sequence_sum(1,5, 1));
var_dump(sequence_sum(1, 5, 3));