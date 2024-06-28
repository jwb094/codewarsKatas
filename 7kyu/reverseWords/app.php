<?php

function reverseWords($str) {
    // Go for it
    var_dump(array_reverse(explode(" ",strrev($str))));
    $str = explode(" ",$str);
    for ($i=0; $i < count($str); $i++) { 
        $str[$i] = strrev($str[$i]);
    }

    $str =implode(" ",$str);
   // var_dump($str);
    return $str;
  }


  var_dump(reverseWords('The quick brown fox jumps over the lazy dog.'));//, 'ehT kciuq nworb xof spmuj revo eht yzal .god');
  //var_dump(reverseWords('apple'));//, 'elppa');
  //var_dump(reverseWords('a b c d'));//, 'a b c d');
  //var_dump(reverseWords('double  spaced  words'));//, 'elbuod  decaps  sdrow');