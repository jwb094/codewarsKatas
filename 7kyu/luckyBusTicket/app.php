<?php


function isLucky($ticket){

    // good luck!

    preg_match_all('/[0-9]/', $ticket, $numbersMatches);
    if (count($numbersMatches[0]) >=! 6  && count($numbersMatches[0])  === 6) {
        $split = array_chunk($numbersMatches[0], 3);
       return  array_sum($split[0]) === array_sum(end($split)) ? true : false;
    }
    return false;

  
  }



var_dump(isLucky('123321'));//true
var_dump(isLucky('100001'));//true
var_dump(isLucky('100200'));//false
var_dump(isLucky('12341234'));//false
var_dump(isLucky('12a12a'));//false
var_dump(isLucky(''));//false