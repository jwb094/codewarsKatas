<?php


function longest($a, $b) {
    // your code
    $towIntoOne = array_unique(array_merge(str_split($a),str_split($b)));
    sort($towIntoOne);
    return implode("",$towIntoOne);

}



var_dump(longest("aretheyhere", "yestheyarehere"));//aehrsty
var_dump(longest("loopingisfunbutdangerous", "lessdangerousthancoding"));// "abcdefghilnoprstu"
var_dump(longest("inmanylanguages", "theresapairoffunctions"));//"acefghilmnoprstuy"
var_dump(longest("lordsofthefallen", "gamekult"));//"adefghklmnorstu"