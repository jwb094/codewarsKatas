<?php

function predictAge($age1,$age2,$age3,$age4,$age5,$age6,$age7,$age8){

//    $ageArray= [$age1,$age2,$age3,$age4,$age5,$age6,$age7,$age8];
//    var_dump((int)floor(sqrt(array_sum(array_map(function ($age){
//     return $age * $age;
// },$ageArray)))/2));

    $arrayOfAge= [$age1,$age2,$age3,$age4,$age5,$age6,$age7,$age8];
    $arrayOfAgeMultiplyByItself = array_map('multiplyByItself', $arrayOfAge);
    $arrayOfAgeMultiplyByItselfAddedTogether = floor(sqrt(array_sum($arrayOfAgeMultiplyByItself)) / 2);
    return (int)$arrayOfAgeMultiplyByItselfAddedTogether;

    //var_dump($arrayOfAgeMultiplyByItselfAddedTogether);

    //return 0; // do it


}



function multiplyByItself($n)
{
    return ($n * $n);
}

  var_dump(predictAge(65,60,75,55,60,63,64,45));
 //var_dump(predictAge(32,54,76,65,34,63,64,45));