<?php

function getSum(int $a, int $b)
{

    //$a & $b are the same value 
    if ($a === $b) {
        return $a;
    }

    $numbers = [$a, $b];
    sort($numbers);
    $firstIndex = array_shift($numbers);
    $lastIndex =  end($numbers);
    $total = [];
    $result = 0;

    for ($i = $firstIndex; $i <= $lastIndex; $i++) {
        array_push($total, $i);
    }
    $result = array_sum($total);
    // for ($i = 0; $i < count($total); $i++) {
    //     $result += $total[$i];
    // }


    //print_r(array_sum(range($a, $b)) . "\n");

    return $result;
}


//REFACTOR

// function getSum(int $a, int $b)
// {

//     //$a & $b are the same value 
//     if ($a === $b) {
//         return $a;
//     }

//     $numbers = [$a, $b];
//     sort($numbers);
//     $firstIndex = array_shift($numbers);
//     $lastIndex =  end($numbers);
//     $total = [];
//     $result = 0;

//     print_r(array_sum(range($a, $b)));

//     for ($i = $firstIndex; $i <= $lastIndex; $i++) {
//         $result += $i;
//     }

//     return $result;
// }

print_r(getSum(0, -1) . "\n"); //-1

print_r(getSum(0, 1) . "\n"); //1

print_r(getSum(2, 2) . "\n"); //2

print_r(getSum(12, 6) . "\n");//2
