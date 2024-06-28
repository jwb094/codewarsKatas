<?php



function changeCount($change) {
    $total = (float)0;
$changeKeyValueArray = array(
    "penny"=>  0.01,
    "nickel"=>  0.050,
    "dime"=>  0.10,
    "quarter"=> 0.25,
    "dollar"=> 1.00,

);

foreach (explode(" ",$change) as $key => $value) {
    if (array_key_exists($value, $changeKeyValueArray)) {
        $total =+ $total + $changeKeyValueArray[$value];
    }
}

    return "$".number_format($total,2);
}


var_dump(changeCount('dime penny dollar'));

var_dump( changeCount('dime penny nickel'));
var_dump( changeCount('dollar quarter dime dime nickel quarter quarter'));
var_dump(changeCount('quarter quarter'));
var_dump(changeCount('dollar penny dollar'));
var_dump( changeCount('dollar dollar dollar dollar dollar dollar dollar dollar dollar dollar penny'));