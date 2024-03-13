<?php
function is_uppercase($str) {
  // your code here

  return preg_match('[A-Z]',$str) ? true : false;

  //return $str === strtoupper($str) ? true : false;
}


var_dump(is_uppercase('c'));exit;