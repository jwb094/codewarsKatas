<?php

function toNumberArray(array $stringArray) : array {

    for ($i=0; $i < count($stringArray); $i++) { 
        # code...
        // if(str_contains($stringArray[$i], '.')){
        //     $stringArray[$i]  = floatval($stringArray[$i]);
        // }  else{
        //     $stringArray[$i]  = intval($stringArray[$i]);
        // }
        $stringArray[$i] = (str_contains($stringArray[$i], '.')) ? floatval($stringArray[$i]) : intval($stringArray[$i]) ;
    }
    return $stringArray;
}


var_dump(toNumberArray(["1.1","2.2","3.3"]));