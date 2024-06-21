<?php
function isNice($arr){

if (empty($arr) || count($arr)  < 2) {
    return false;
}
$isNiceOrNaughty = array();
for ($i=0; $i < count($arr); $i++) { 
    # code...
    if (in_array(($arr[$i] + 1),$arr) || in_array(($arr[$i] - 1),$arr)) {
        array_push($isNiceOrNaughty,true);
    }

}
return array_sum($isNiceOrNaughty) === count($arr) ? true : false ;
}