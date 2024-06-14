<?php


function getCount($str) {
    //$vowelsCount = 0;
    //$str = str_split($str);

    preg_match_all('/[aeiou]/', $str, $matches, PREG_OFFSET_CAPTURE);
    //print_r(count($matches[0]));  
    // enter your magic here
    
    return count($matches[0]);
  }




var_dump(getCount("abracadabra"));