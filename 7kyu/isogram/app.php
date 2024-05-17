<?php

function isIsogram($string) {

    // $arr = str_split(strtolower($string));
   // var_dump($arr);
//     var_dump(array_map($arr, 'strtolower'));
    $data = array_filter(array_count_values(str_split(strtolower($string))), function($el)
{
    
    return ($el > 1);
});
    // print_r(count($data));

     return count($data) === 0  ? true  : false;
//$arr = str_split($string);
//var_dump(count($arr));
//var_dump(array_unique($arr));

//return    count(array_unique(str_split($string))) === count(str_split($string)) ? true : false;
    //return true;
  }




var_dump(isIsogram("Dermatoglyphics"));//true,
var_dump(isIsogram("isogram"));//true;
var_dump(isIsogram("aba"));//false
var_dump(isIsogram("moOse"));//false
var_dump(isIsogram("isIsogram"));//false
var_dump(isIsogram(""));//true,