<?php

function sum_of_minimums($numbers)
{
    //var_dump($numbers);
$arrayofMinimum = [];
  for ($i=0; $i < count($numbers); $i++) { 
        # code...
        sort($numbers[$i]);
        //var_dump($numbers[$i]);
        array_push($arrayofMinimum,$numbers[$i][0]);
    }

    var_dump($arrayofMinimum);
    return array_sum($arrayofMinimum);
}






var_dump(sum_of_minimums([[ 7,9,8,6,2 ], [6,3,5,4,3], [5,8,7,4,5]]));
var_dump(sum_of_minimums([[11,12,14,54], [67,89,90,56], [7,9,4,3], [9,8,6,7]]));