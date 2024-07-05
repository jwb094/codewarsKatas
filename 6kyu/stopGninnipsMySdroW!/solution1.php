<?php

function spinWords(string $str){
  // TODO Have fun :)
  $str = explode(" ",$str);

  foreach ($str as $key => $value) {

    if (strlen($value) >= 5) {
      $str[$key] = strrev($value);
    }
  }
  return implode(" ",$str);
}


var_dump(spinWords("Welcome"));
var_dump( spinWords("Hey fellow warriors"));

var_dump(spinWords("This is another test"));