<?php

function sentencify($words){
    # TODO: Your code here! $words will be an array.

    return ucfirst( implode(" ",$words)).".";
  }
  


  var_dump(sentencify(array("i", "am", "an", "AI")));