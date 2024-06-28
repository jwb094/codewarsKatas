<?php


function removeRotten($fruitBasket) {

    if (empty($fruitBasket)) {
        return [];    
    } 


    foreach ($fruitBasket as $key => $value) {
        if (str_contains($value,"rotten")) {
            $fruitBasket[$key] = substr($value, strlen("rotten"));
        }
    }


return $fruitBasket;
  }

var_dump(removeRotten(["apple","rottenBanana","kiwi","rottenMango"]));