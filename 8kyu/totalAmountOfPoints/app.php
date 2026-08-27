<?php
function points(array $games): int {
    $total = 0;

    foreach($games as $game){
        $gameScore = explode(":",$game);
        $x = (int)$gameScore[0];
        $y =  (int)$gameScore[1];
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