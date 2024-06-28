<?php

function XO($s) {
    $x = substr_count(strtolower($s), 'x');
    $o = substr_count(strtolower($s), 'o');

    if ($x === 0 && $o === 0) {
        return true;
    }
    return($x === $o) ? true : false ;
    

  }


var_dump(XO('xo'));//true,
var_dump(XO('XO'));//true,
var_dump(XO('xo0'));//true,
var_dump(XO('xxxoo'));//false
var_dump(XO("xxOo"));//true,