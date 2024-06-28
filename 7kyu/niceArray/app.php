<?php

function isNice($arr){

    if (empty($arr) || count($arr)  < 2) {
        return false;
    }
    // $test = array_map(function($n,$m){
    //     if(in_array(($n + 1),$arr) || in_array(($n[$i] - 1),$arr)){
    //         return true;
    //     }

    // }, $arr);
    // var_dump($test);
    $isNiceOrNaughty = array();
    for ($i=0; $i < count($arr); $i++) { 
        # code...
        if (in_array(($arr[$i] + 1),$arr) || in_array(($arr[$i] - 1),$arr)) {
            array_push($isNiceOrNaughty,true);
        }

    }
   // var_dump(array_sum($isNiceOrNaughty));
    //var_dump(count($arr));

    return array_sum($isNiceOrNaughty) === count($arr) ? true : false ;
    //return `Ì am Nice`;
  }


var_dump(isNice([0, 2, 19, 4, 4]));//false
var_dump(isNice([3, 2, 1, 0]));//true
var_dump(isNice([3, 2, 10, 4, 1, 6]));//false
var_dump(isNice([1, 1, 8, 3, 1, 1]));//false
var_dump(isNice([0, 1, 2, 3]));//true
var_dump(isNice([1, 2, 3, 4]));//true
var_dump(isNice([0, -1, 1]));//true
var_dump(isNice([0, 2, 3]));//false
var_dump(isNice([0]));//false/
var_dump(isNice([]));//false
var_dump(isNice([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]));//true
var_dump(isNice([0, 1, 3, -2, 5, 4]));//false
var_dump( isNice([0, -1, -2, -3, -4]));//true
var_dump( isNice([1, -1, 3]));//false
var_dump( isNice([1, -1, 2, -2, 3, -3, 6]));//false
var_dump( isNice([2, 2, 3, 3, 3]));//true
var_dump( isNice([1, 1, 1, 2, 1, 1]));//true
var_dump( isNice([1, 2, 7, 8]));//true