<?php

function toWeirdCase($str) {
    // WRITE SOME MAGIC
    
    $reindexStringArray = array();
    $str_ = str_split($str);

    for ($i=0; $i < count($str_); $i++) { 
        $reindexStringArray[$i+1] = $str_[$i]; 
    }
    var_dump($reindexStringArray);
    foreach ($reindexStringArray as $key => $value) {
    
        if ($key % 2 !== 0) {
            $reindexStringArray[$key]  = strtoupper($value);
        }else{
           $reindexStringArray[$key]  = strtolower($value);
        }
        //$str[$key]  = strtolower($value);
    }
    var_dump($reindexStringArray);
    // foreach ($str_ as $key => $value) {
    //     $str_[$key]  = $value;
    // }
 
/*    var_dump($str_);
$str= str_split($str);

  foreach ($str as $key => $value) {
    
     if ($key % 2 == 0) {
         $str[$key]  = strtoupper($value);
     }else{
        $str[$key]  = strtolower($value);
     }
     //$str[$key]  = strtolower($value);
 }
 //var_dump(implode("",$str));
//   return implode(" ",$str);

*/

}
 // var_dump(toWeirdCase("String"));
 // var_dump(toWeirdCase("Weird string case"));
  var_dump( toWeirdCase('Hello world foo bar baz'));
  var_dump(toWeirdCase('wEll i GuesS you passed'));