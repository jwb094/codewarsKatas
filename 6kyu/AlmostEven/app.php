<?php

function split_integer(int $num, int $parts) {

    $m1 = $num % $parts; // 20 % 6 = 2 
    $m1 = $m1 * $parts;

    $m2 = $num - $m1; // 20  - 12 = 8
    //echo($m2);

    $getCommonFactors = getDivisorsValues( array($m1,$m2),$parts);
    print_r($getCommonFactors);
    //    $getHighestDivisorsValues =getHighestDivisorsValues($getCommonFactors);

   // $getHighestCommonFactor = getHighestCommonFactor($getCommonFactors);
 
    // $spiltNumberIntoPartsViaHighestCommonFactor = spiltNumberIntoPartsViaHighestCommonFactor($getHighestCommonFactor,array($m1,$m2));
   // print_r($spiltNumberIntoPartsViaHighestCommonFactor);

    //return [];
  }


function  getDivisorsValues($array){
    $multiples_arr = array();
    foreach($array as $key => $value){
        $new_key = $value;
        for ($i=$value; 0 < $i; $i--) { 
            
            $multiples_arr[$i][] =  $value % $i; 
        }
    }
 
    return $multiples_arr;
   

}
function getHighestDivisorsValues($getCommonFactors){
    // list($array1,$array2) = array_chunk($getCommonFactors, ceil(count($getCommonFactors) / 2));
    // $array1 = $array1[0];
    // $array2 = $array2[0];
    // print_r($array1);
    // print_r($array2);
   // print_r($getCommonFactors);
    foreach($getCommonFactors as $key => $value){
    $_key= $key;
        //print_r($value);
            // if ($key) {
            //     # code...
            // }
            //print_r( $_key);
            $ans = $_key % $value;

            // 
            if(is_int($ans) == false){
                 unset($getCommonFactors[$key][$value]);
             }
        }
        print_r($getCommonFactors);
}
    
   split_integer(20, 6);

   //https://beamtic.com/common-multiples-php