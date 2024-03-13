<?php

function countPositivesSumNegatives($input) {
    //return ?;

    if($input === null || count($input) == 0){
        return  [] ;
    }
    $positive = 0;
    $negative = [];
    for ($i=0; $i < count($input); $i++) { 
        $input[$i] > 0 ? $positive++ : array_push($negative,$input[$i]) ;
    }
    return [$positive,array_reduce($negative,"IntTotal")];
}

function IntTotal($v1,$v2){
    return $v1+$v2;
}


print_r(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]));
print_r(countPositivesSumNegatives([0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14]));