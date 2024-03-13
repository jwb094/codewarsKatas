<?php

function addLength($str){


    $str = explode(" ", $str);
    $ans = array();  
    foreach ($str as $value) {
        array_push($ans,   $value." ".strlen($value));
    }
    return $ans;

}


var_dump(addLength('you will win'));