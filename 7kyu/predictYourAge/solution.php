<?php


function predictAge($age1,$age2,$age3,$age4,$age5,$age6,$age7,$age8){

    $arrayOfAge= [$age1,$age2,$age3,$age4,$age5,$age6,$age7,$age8];
    $arrayOfAgeMultiplyByItself = array_map('multiplyByItself', $arrayOfAge);
    $arrayOfAgeMultiplyByItselfAddedTogether = floor(sqrt(array_sum($arrayOfAgeMultiplyByItself)) / 2);
    return (int)$arrayOfAgeMultiplyByItselfAddedTogether;
}
function multiplyByItself($n)
{
    return ($n * $n);
}



var_dump(predictAge(65,60,75,55,60,63,64,45));
var_dump(predictAge(32,54,76,65,34,63,64,45));