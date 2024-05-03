<?php

function frogContest($flies)
{
    $chris = 0;
    $tom = 0;
    $cat = 0;


    $chris = summationOfNumbers($flies,$chris);
    $tom = summationOfNumbers($flies = floor($chris/2),$tom);
    $cat = summationOfNumbers($flies= $chris + $tom,$cat);



    return "Chris ate " . $chris ." flies, Tom ate " . $tom ." flies and Cat ate " . $cat . " flies";

}




function summationOfNumbers($f,$person){

    for ($i = 0; $i <= $f; $i++) {
        $person = $person + $i;
    }
    var_dump($person);
    return $person;
 
}



var_dump(FrogContest(5));

// dsaasd

// chris
// x =e.g. 5
// 1+2+3+4+5

// tom
// 7
// 1+2+3+4+5+6+7

// Cat
// 15+28
// 1 + 43ssss