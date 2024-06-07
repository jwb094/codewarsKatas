<?php

function solution($nums)
{   
    print_r($nums);
    if ($nums === null || empty($nums)) {
        return [];
    } else {
 //       return rsort($nums);
 sort($nums);
 return $nums;
    }
}

function arrangeByLength($a,$b){
    return  $b > $a;
}


var_dump(solution([1, 2, 10, 50, 5]));//, [1, 2, 5, 10, 50]
var_dump(solution(null));//[]
var_dump(solution([]));//[]
