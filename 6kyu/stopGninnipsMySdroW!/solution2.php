<?php

function spinWords(string $str){
return implode(" ",array_map(function ($d){
  return  strlen($d) >= 5? strrev($d) : $d;
},explode(" ",$str)));

}


var_dump(spinWords("Welcome"));
var_dump(spinWords("Hey fellow warriors"));

var_dump(spinWords("This is another test"));