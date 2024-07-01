<?php


function remove_exclamation_marks($string) {
    // Your code here.

    return str_replace("!","",$string);
    //var_dump(str_replace("!","",$string));
}


var_dump(remove_exclamation_marks('Hello World!'));