<?php
  
function digitize(int $n){
    $str = (string) $n;
    $arr = [];
    for ($i=0; $i < strlen($str); $i++) { 
    array_push($arr,(int) $str[$i]);
    }
    return array_reverse($arr);
}

var_dump(digitize(35231));