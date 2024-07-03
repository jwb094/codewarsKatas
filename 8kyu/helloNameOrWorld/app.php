<?php

function hello($name = '') {
   
    if ($name === '') {
        return 'Hello, World!';
    }
   return "Hello, ".ucfirst(strtolower(($name)))."!";



}



var_dump(hello('johN'));
var_dump(hello('johN'));
var_dump(hello(''));
var_dump(hello());
