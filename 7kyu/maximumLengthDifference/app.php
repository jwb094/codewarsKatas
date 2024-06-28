<?php


function mxdiflg($a1, $a2) {
    // your code
   // sort($a1);
    uasort($a1, function ($a, $b) {
        return strlen($b) - strlen($a);
    });
    uasort($a2, function ($a, $b) {
        return strlen($b) - strlen($a);
    });
    $a1 = array_values($a1);
    $a2 = array_values($a2);
    //sort($a2);
    var_dump(max($a1));
    var_dump(max($a2));


    //return max($a1) - max($a2);
}


var_dump(
    mxdiflg($s1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"],
            $s2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]));