<?php

function isIsogram($string) {

    $data = array_filter(array_count_values(str_split(strtolower($string))), function($el){
        return ($el > 1);
    });
     return count($data) === 0  ? true  : false;

  }




var_dump(isIsogram("Dermatoglyphics"));//true,
var_dump(isIsogram("isogram"));//true;
var_dump(isIsogram("aba"));//false
var_dump(isIsogram("moOse"));//false
var_dump(isIsogram("isIsogram"));//false
var_dump(isIsogram(""));//true,