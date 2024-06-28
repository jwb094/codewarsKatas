<?php 


function sumArray($array) {


    if(count($array) === 1){ return 0;}
    if(empty($array)){ return 0;}
    if($array === null){ return 0;}
    if($array === ""){ return 0;}

    
    $min  = (min($array));
    $max  = (max($array));
    asort($array);
    $array = array_values($array);
   // asort($array,'arrangeByLength');
   array_shift($array);
    array_pop($array);
   // unset($array[end($array)]);
    // unset($array[max($array)]);
    print_r($array);
    //unset($max);
//    print_r($array);
  //  var_dump($max);
//     foreach ($array as $key => $value) {
//      if ($value == $min) {
//         unset($array[$key]);
//         }
//         if ($value == $max) {
//             unset($array[$key]);
//             }
//     }
return array_sum($array);
}


function arrangeByLength($a,$b){
    return $a > $b;
}


print_r( sumArray([6, 2, 1, 8, 10]));
