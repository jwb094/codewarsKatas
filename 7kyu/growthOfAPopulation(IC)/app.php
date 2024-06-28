<?php

function nbYear($p0, $percent, $aug, $p) {
    // your code
//   $howManyYearsItWillTakeForThePopulationToReachOrExceedTarget = 0;
//   $populationNewTotal = 0;
//   do {
//     # code...

//     $populationNewTotal = $p0 + $p0 * ($percent/100) + $aug;

//     $p0 = round($populationNewTotal);
//     //var_dump(  round($p0) );  
//     $howManyYearsItWillTakeForThePopulationToReachOrExceedTarget++;
//   } while ($p >= $populationNewTotal);

//   return $howManyYearsItWillTakeForThePopulationToReachOrExceedTarget;
// }


$percent = $percent / 100;
$howManyYearsItWillTakeForThePopulationToReachOrExceedTarget = 0;
    while ($p0 < $p) {
        $p0 =  $p0 + $p0 * $percent + $aug;
        $howManyYearsItWillTakeForThePopulationToReachOrExceedTarget +=1;
    }
    print_r($howManyYearsItWillTakeForThePopulationToReachOrExceedTarget);
    return $howManyYearsItWillTakeForThePopulationToReachOrExceedTarget;
}

var_dump(nbYear(1500, 5, 100, 5000));//15
var_dump(nbYear(1500000, 2.5, 10000, 2000000));//10
