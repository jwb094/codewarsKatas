<?php


function valid_name($array) {
    $doesItfollowTheLatestTrend = array();

    if (empty($array)) return "You must test at least one name.";
    

    if (count($array) === 1)return "Congratulations, you can choose any name you like!";
    

    for ($i=0; $i < count($array)-1; $i++) { 
        $current = str_split($array[$i]);
        $next = str_split($array[$i+1]);
        (strtolower(end($current)) === strtolower($next[0])) ? array_push($doesItfollowTheLatestTrend,true) : array_push($doesItfollowTheLatestTrend,false) ;
    }
    return (count(array_filter($doesItfollowTheLatestTrend)) === count($array)-1) ? "Congratulations, your baby names are compatible!" : "Back to the drawing board, your baby names are not compatible." ;
}




var_dump(valid_name(["Cruz", "Zuma"]));// "Congratulations, your baby names are compatible!");
var_dump(valid_name(["Buddy Bear","Romeo", "Olive"]));// , "Congratulations, your baby names are compatible!");
var_dump(valid_name(["Peaches", "Saint", "Theodora", "Ava", "Apple", "Egypt", "Tallulah", "Harlow", "Willow", "Weston", "Nala", "Atlas", "Silas", "Sundance", "Esmeralda", "Angel", "Lily-Rose", "Ever", "Rebel", "Lourdes"]));// , "Congratulations, your baby names are compatible!");
var_dump(valid_name(["Jaden"]));// , "Congratulations, you can choose any name you like!");
var_dump(valid_name(["George", "Charlotte"]));// , "Back to the drawing board, your baby names are not compatible.");


