<?php


function shortenToDate($longDate) {
    // your code here

    var_dump(number_format((float)$number = 3.1, 2, '.', ''));

    $longDate = explode(" ",$longDate);
    $lastArrayKey = array_key_last($longDate);
    unset($longDate[$lastArrayKey]);
    return str_replace(",","",implode(" ",$longDate));
  

}



var_dump(shortenToDate("Friday May 2, 9am"));
var_dump(shortenToDate("Tuesday January 29, 10pm"));//"Tuesday January 29",
var_dump(shortenToDate("Monday December 25, 10pm"));//"Monday December 25",