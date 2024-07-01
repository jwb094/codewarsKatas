<?php


function multi($array) {
    return array_product($array);
  }
  function add($array) {
    return array_sum($array) ;
  }
  function reverse($string) {
    return implode("",array_reverse(str_split($string)));
  }





var_dump( multi([5, 1, 5]));//25,
var_dump( add([9, 8, 5]));//22
var_dump(reverse("Hello World!"));//"!dlroW olleH"