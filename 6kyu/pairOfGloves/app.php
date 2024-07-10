<?php

function numberOfPairs($gloves)
{   $glovesIsAPair  = array();
    $glovesCount = array_count_values($gloves);
    foreach ($glovesCount as $key => $value) {
        array_push($glovesIsAPair,floor($value / 2));
    }
    return (int)array_sum($glovesIsAPair);
}


 var_dump(numberOfPairs(['red','red']));//, 1
var_dump(numberOfPairs(['red','green','blue']));//, 0
 var_dump(numberOfPairs(['gray','black','purple','purple','gray','black']));//3

var_dump(numberOfPairs(['Navy', 'Fuchsia', 'Blue', 'Teal', 'Silver', 'Navy', 'Yellow', 'Green', 'Navy', 'Gray', 'Aqua', 'Blue', 'Lime', 'Fuchsia', 'Green', 'Green', 'Green', 'Teal', 'Black', 'Black', 'Olive', 'Lime', 'Aqua', 'Teal', 'Maroon','Maroon', 'Fuchsia', 'Olive', 'Gray', 'Black', 'White', 'Purple', 'Fuchsia', 'Navy', 'Blue', 'Black', 'Green', 'Gray', 'Green', 'Navy', 'Black', 'Red', 'Purple', 'Gray', 'Fuchsia', 'Fuchsia', 'Yellow', 'Olive', 'Green', 'Purple', 'Black', 'Blue', 'Blue', 'Red', 'Purple','Navy', 'Maroon', 'Lime', 'Black', 'White', 'Navy', 'Lime', 'Red','Black']));
var_dump(numberOfPairs(['Teaavy', 'Teaavy', 'Teaavy', 'Teaavy', 'Teaavy', 'Teaavy', 'Teaavy', 'Teaavy', 'Teaavy', 'Teaavy', 'Laroon', 'Laroon', 'Laroon', 'Laroon', 'Laroon', 'Laroon', 'Purpln', 'Purpln', 'Purpln', 'Purpln', 'Purpln', 'Purpln', 'Purpln', 'Purpln', 'Ovy', 'Ovy', 'Ovy', 'Ovy', 'Ovy', 'Purpme', 'Purpme', 'Purpme', 'Purpme', 'Whiilver', 'Tehite', 'Tehite', 'Tehite', 'Tehite', 'Tehite', 'Tehite', 'Tehite', 'Tehite', 'Fume', 'Fume', 'Fuchsiroon', 'Fuchsiroon', 'Fuchsiroon', 'Fuchsiroon', 'Fuchsiroon', 'Fuchsiroon', 'Fuchsiroon']));