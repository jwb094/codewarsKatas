<?php

function what_list_am_i_on(array $actions) {
    

    $isNaughty = array();
    $isNice    = array();
    foreach ($actions as $key => $value) {
        $first_character = substr($value, 0, 1);
        if (in_array($first_character,array("b","f","k"))) {
            array_push($isNaughty,true);
        }
        if (in_array($first_character,array("g","s","n"))) {
            array_push($isNice,true);
        }

    }


    if (array_sum($isNaughty) > array_sum($isNice)) {
       return "naughty";
    }

    if (array_sum($isNaughty) < array_sum($isNice)) {
        return "nice";
    }

    if (array_sum($isNaughty) === array_sum($isNice)) {
        return "naughty";
    }

}


  var_dump(what_list_am_i_on(['broke someone\'s window', 'fought over a toaster', 'killed a bug']));
  var_dump(what_list_am_i_on(["got someone a new car", "saved a man from drowning", "never got into a fight"]));
  var_dump(what_list_am_i_on(["broke a vending machine", "never got into a fight", "tied someone's shoes"]));