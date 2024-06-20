<?php
function orderedCount($text) {
    // Implement me!

    if ($text === "") return [];
    $orderedCountOfCharacters = array();
    $letters = array_unique(str_split($text));
   // var_dump(str_split($text));
    //sort($letters);
    //uasort( $letters, 'cmp' );
    $letters = array_values( $letters );
    var_dump($letters);
   //$letter = array_count_values(str_split($text));
   //sort($letter);
   //var_dump($letter);
    //    return [];

    for ($i=0; $i < count($letters); $i++) { 
        //var_dump($letters[$i]);
        //echo count(array_keys(str_split($text), $letters[$i]));
        $orderedCountOfCharacters[] = [$letters[$i],count(array_keys(str_split($text), $letters[$i]))];
    
   }

   print_r($orderedCountOfCharacters);
  }


  function cmp( $a, $b ) {
    if ( $a == $b ) return 0;
    elseif ( $a > $b ) return 1;
    elseif ( $a < $b ) return -1;
  }

var_dump(orderedCount("abracadabra"));
var_dump(orderedCount("Code Wars"));

var_dump(orderedCount(""));