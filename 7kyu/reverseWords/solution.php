<?php

function reverseWords($str) {
va

    $str = explode(" ",$str);
    for ($i=0; $i < count($str); $i++) { 
        $str[$i] = strrev($str[$i]);
    }

    $str =implode(" ",$str);
    return $str;
  }
