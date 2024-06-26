<?php



function abbrevName($name)
{   
    $name = explode(" ",$name);
    $firstInital = strtoupper(substr(current($name), 0, 1));
    $lastInital = strtoupper(substr(end($name), 0, 1));
    return $firstInital.".".$lastInital;
   
}



var_dump(abbrevName("Sam Harris"));