<?php


function in_asc_order($arr) {
    // Program your algorithm here to be tested
   $arrIndexTrueORFalse = array();
    for ($i=0; $i < count($arr)-1; $i++) { 
 
       ($arr[$i] < $arr[$i+1]) ? $arrIndexTrueORFalse[] = true : $arrIndexTrueORFalse[] = false; 
}
//print_r(array_sum($arrIndexTrueORFalse) ."- ".count($arrIndexTrueORFalse));
    // $af = array_filter($arrIndexTrueORFalse);
    // if ($af === true) {
    //     return true;
    // }
    // if (empty($af)) {
    //     return false;
    //}

    return array_sum($arrIndexTrueORFalse) === count($arrIndexTrueORFalse) ? true : false;
}





var_dump(in_asc_order([1, 2, 4, 7, 19]));
 var_dump(in_asc_order([1, 2, 3, 4, 5]));
 var_dump(in_asc_order([1, 6, 10, 18, 2, 4, 20]));
var_dump(in_asc_order([9, 8, 7, 6, 5, 4, 3, 2, 1]));