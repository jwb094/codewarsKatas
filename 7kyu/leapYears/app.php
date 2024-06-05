<?php

function isLeapYear(int $year): bool {
  //return true;
/**
 
*($year % 100 == 0)  ? true : ($year % 400 == 0)  ? true  : ($year % 4 == 0)  ? true : false;
*$retVal = ($year % 100 == 0) ? a : b ;
*$retVal = ($year % 400 ) ? a : b ;
*$retVal = ($year % 100 == 0) ? a : b ;
*/

// if ($year % 400 == 0) {
//     return true;
// } else if ($year % 100 == 0){
//     return false;
// } else if ($year % 4 == 0){
//     return true;
// } else{
//     return false;
// }


if ($year % 400 == 0) {
    return true;
} 
if ($year % 100 == 0){
    return false;
}  
if ($year % 4 == 0){
    return true;
} 
    return false;

    /*
    if($year % 4 != 0)return false;
    if($year % 400 == 0)return true;
    return $year % 100 != 0;
    */




 //return $year % 100 == 0  ? true : $year % 400 == 0  ? true  : $year % 4 == 0  ? true : false;

}




var_dump(isLeapYear(2020));//true
var_dump(isLeapYear(2000));//true
var_dump(isLeapYear(2100));//false
var_dump(isLeapYear(2015));//false

