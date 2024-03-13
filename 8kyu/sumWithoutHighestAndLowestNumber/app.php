<?php 


function sumArray($array) {


    if(count($array) === 1){ return 0;}
    if(empty($array)){ return 0;}
    if($array === null){ return 0;}
    if($array === ""){ return 0;}

    
    $min  = (min($array));
    $max  = (max($array));

    foreach ($array as $key => $value) {
     if ($value == $min) {
        unset($array[$key]);
        }
        if ($value == $max) {
            unset($array[$key]);
            }
    }
return array_sum($array);
}





print_r( sumArray([6, 2, 1, 8, 10]));
