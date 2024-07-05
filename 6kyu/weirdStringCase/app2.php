<?php

function toWeirdCase($str) {
    // WRITE SOME MAGIC
    
    $reindexStringArray = array();
    $str = explode(" ",$str);

    for ($i=0; $i < count($str); $i++) { 
        $str[$i] = str_split($str[$i]);
        for ($v=0; $v < count($str[$i]);  $v++) { 
            if ($v % 2 == 0) {
                $str[$i][$v]  = strtoupper($str[$i][$v]);
               }else{
                $str[$i][$v] = strtolower($str[$i][$v]);
                }
        }
        $str[$i] = implode("",$str[$i]);

    }
    return implode(" ",$str);
}
 var_dump(toWeirdCase("String"));
var_dump(toWeirdCase("Weird string case"));
  var_dump( toWeirdCase('Hello world foo bar baz'));
  var_dump(toWeirdCase('wEll i GuesS you passed'));