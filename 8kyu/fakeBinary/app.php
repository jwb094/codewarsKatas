<?php


function fake_bin(string $s) {
    // Write your code here

    //$s = str_split($s);
    //echo $s;
    //var_dump(  $s );
    return implode("",array_map(function ($d){
        return (int)$d >= 5 ? 1 : 0;
    },str_split($s)));
    // var_dump(array_map(function ($d){
    //          return (int)$d >= 5 ? 1 : 0;
    //      },$s));


  }



var_dump(fake_bin('45385593107843568'));//'01011110001100111'
//var_dump(fake_bin('509321967506747'));//'101000111101101'
//var_dump(fake_bin('366058562030849490134388085'));//'011011110000101010000011011'
