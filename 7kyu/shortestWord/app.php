<?php

function findShort($str){
    $str = explode(" ", $str);
    usort($str,'arrangeByLength');

    
    $str= array_shift($str);
    //var_dump(strlen($str));
    return strlen($str);
}
function arrangeByLength($a,$b){
    return strlen($a)-strlen($b);
}


var_dump(findShort("bitcoin take over the world maybe who knows perhaps"));
