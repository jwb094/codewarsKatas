<?php


function litres(float $t): int {
    return floor($t *0.5);
}


var_dump(litres(1.4));