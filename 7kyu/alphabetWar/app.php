<?php


function alphabetWar($fight)
{
    $leftHand = array( "w" => 4,"p" => 3,"b" => 2,"s" => 1);
    $rightHand = array("m" => 4,"q" => 3,"d" => 2,"z" => 1);
    $leftHandTotal = array();
    $rightHandTotal = array();
    //Find the Matches
    preg_match_all('/[m|q|d|z]/',$fight,$rightHandMatches);
    preg_match_all('/[w|p|b|s]/',$fight,$leftHandMatches);
    $leftHandMatches  = $leftHandMatches[0];
    $rightHandMatches = $rightHandMatches[0];

    
    foreach ($leftHandMatches as $key => $value) {
        if (array_key_exists($value, $leftHand)) {
            array_push($leftHandTotal,$leftHand[$value]);
        }

    }
    foreach ($rightHandMatches as $key => $value) {
        if (array_key_exists($value, $rightHand)) {
            array_push($rightHandTotal,$rightHand[$value]);
        }
    }
 

    if (array_sum($leftHandTotal) > array_sum($rightHandTotal) ) {
        return  "Left side wins!" ;
    }
    if (array_sum($leftHandTotal) < array_sum($rightHandTotal) ) {
        return "Right side wins!";
    }
    if (array_sum($leftHandTotal) === array_sum($rightHandTotal) ) {
        return "Let's fight again!";
    }

}



  
var_dump(alphabetWar("z"));//"Right side wins!"
var_dump(alphabetWar("zdqmwpbs"));//"Let's fight again!",
var_dump(alphabetWar("zzzzs"));//"Right side wins!"
var_dump(alphabetWar("wwwwww"));//"Left side wins!"