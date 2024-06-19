<?php

function nothing_special($s) {
    // Your code here

    $str = preg_replace('/[\d|!@£$%^&*()_+#]/', "", $s);

    //var_dump($str);
    return ($str === "") ? "Not a string!" : ucfirst($str) ;
    
  }


 var_dump(nothing_special("Hello World!"));//"Hello World"
 var_dump(nothing_special("%^Take le\$ft ##quad%r&a&nt"));//"Take left quadrant"
 var_dump(nothing_special("M\$\$\$\$\$\$\$y ally!!!!!"));//"My ally"
 var_dump(nothing_special(25));//"Not a string!"