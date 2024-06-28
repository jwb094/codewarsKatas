<?php 

function hasUniqueChars($string) {
    // TODO: complete

    $arrayIsCharUniqueTrueORFalse = array();
    $string = str_split($string);
    for ($i=0; $i < count($string)-1; $i++) { 
 
       ($string[$i] != $string[$i+1]) ? $arrayIsCharUniqueTrueORFalse[] = true : $arrayIsCharUniqueTrueORFalse[] = false; 
    }


    //var_dump(array_sum($arrIndexTrueORFalse));
    //var_dump(count($arrIndexTrueORFalse));

    return array_sum($arrayIsCharUniqueTrueORFalse) === count($arrayIsCharUniqueTrueORFalse) ? true : false;
  }



  var_dump(hasUniqueChars('abcdef'));
  var_dump(hasUniqueChars('++-'));
  var_dump(hasUniqueChars('  nAa'));