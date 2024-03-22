<?php 


function sumArray($array) {


    if(count($array) === 1){ return 0;}
    if(empty($array)){ return 0;}
    if($array === null){ return 0;}
    if($array === ""){ return 0;}

    asort($array);
    $array = array_values($array);

    array_shift($array);
    array_pop($array);

    print_r($array);

return array_sum($array);
}


function arrangeByLength($a,$b){
    return $a > $b;
}


print_r( sumArray([6, 2, 1, 8, 10]));
