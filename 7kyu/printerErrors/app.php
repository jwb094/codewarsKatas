<?php


function printerError($s) {
   $str = preg_match_all('/[n-z]/', $s,$matches);
    var_dump($str);
    return "".$str."/".strlen($s).""; 
    //($str === "") ? "Not a string!" : ucfirst($str) ;
}




var_dump(printerError($s="aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz"));
var_dump(printerError($s="kkkwwwaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz"));
var_dump(printerError($s="kkkwwwaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyzuuuuu"));