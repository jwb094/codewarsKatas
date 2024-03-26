<?php

function findShort($str){
    $str = explode(" ", $str);
    usort($str,'arrangeByLength');
    $str= array_shift($str);
    return strlen($str);
}
function arrangeByLength($a,$b){
    return strlen($a)-strlen($b);
}


findShort("bitcoin take over the world maybe who knows perhaps");
