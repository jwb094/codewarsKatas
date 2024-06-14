<?php


function getCount($str) {
    preg_match_all('/[aeiou]/', $str, $matches, PREG_OFFSET_CAPTURE);
    return count($matches[0]);
  }




var_dump(getCount("abracadabra"));