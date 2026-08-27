<?php
function points(array $games): int {
    $total = 0;

    foreach($games as $game){
     
        $x = current(explode(":",$game));
        $y = array_pop(explode(":",$game));


        if ($x > $y) {
            $total += 3;
        }
        if ($x < $y) {
            $total += 0;
        }
        if ($x === $y) {
            $total += 1;
        }

    }

    return     $total;
}