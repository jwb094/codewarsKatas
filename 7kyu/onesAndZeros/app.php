<?php

function binaryArrayToNumber($arr) {
    $digits ='';
    for ($i=0; $i < count($arr); $i++) { 
        $digits .= $arr[$i];
    }
    return bindec((int)$digits);
}

var_dump(binaryArrayToNumber([0,0,0,1]));