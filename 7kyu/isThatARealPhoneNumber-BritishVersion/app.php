<?php


function validateNumber($str){
    //$string = 'April 15, 2003';
    $pattern = '/+44|07|-/gm';
    //$replacement = ;     var_dump(preg_replace('/(+44)|(07)|(-)/', "", $str));
    // var_dump(preg_replace('/+44/', "", $str));
    // var_dump(preg_replace('/07/', "", $str));
     //var_dump(preg_replace('/(-)|(07)|(^+44)/', "", $str));
     //var_dump(preg_replace('/\^+44.*$/', "", $str));
     //var_dump(preg_replace('/07/', "", $str));
    //$str = preg_replace('/+44/', "", $str);
    //$str = preg_replace('/07/', "", $str);
    $str = preg_replace('/[-+]|07|44/', "", $str);
   // $str = (int)$str;

    //var_dump(strlen($str));
   // strlen((string)$num)
    return strlen((string)$str) >= 9 ?'In with a chance':'Plenty more fish in the sea';
  }


var_dump(validateNumber('07454876120'));//'In with a chance'
var_dump(validateNumber('0754876120'));//'Plenty more fish in the sea'
var_dump(validateNumber('0745-487-61-20'));//'In with a chance'
var_dump(validateNumber('+447535514555'));//'In with a chance'