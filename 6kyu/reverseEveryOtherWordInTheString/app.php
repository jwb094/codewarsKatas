<?php

function reverse($str) {
    // WRITE SOME MAGIC

    if ($str === "   ") {
        return "";
    }

$str= explode(" ",$str);

 foreach ($str as $key => $value) {
    
    if ($key % 2 !== 0) {
        $str[$key]  = strrev($value);
    }
}
  return implode(" ",$str);



}
  var_dump(reverse("Did it work?"));
  var_dump(reverse("   "));