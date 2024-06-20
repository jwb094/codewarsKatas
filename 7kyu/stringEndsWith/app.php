<?php


function solution($str, $ending) {
    // TODO: complete
    //var_dump($str);
    if(strlen($ending) > strlen($str)) return false;
    //if(empty($ending)) return false;
    if($ending === '') return true;
    $endingStringLength = strlen($ending); 
    
    //$endingOfStr = substr($str, -strlen($ending));
    //var_dump($endingOfStr);
    //str_ends_With && substr_compare
    return (substr($str, -strlen($ending))  === $ending) ? true : false ;
  }

var_dump(solution("samurai", "ai"));//true
var_dump(solution("sumo", "omo"));//false
var_dump(solution("ninja", "ja"));//true
var_dump(solution("sensei", "i"));//true
var_dump(solution("samurai", "ra"));//false
var_dump(solution("abc", "abcd"));//false
var_dump(solution("abc", "abc"));//true
var_dump(solution("abcabc", "bc"));//true
var_dump(solution('ails', 'fails'));//false
var_dump(solution('fails', 'ails'));//true
var_dump(solution('this', 'fails'));//false
var_dump(solution('yes this will pass',''));//true
var_dump(solution('this will not pass', '`^$<>()[]*|'));//false
var_dump(solution("abc\n", 'abc'));//false