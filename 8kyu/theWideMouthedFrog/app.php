<?php


function mouth_size($animal) {
    // Your code here.

    if ($animal === 'alligator' || $animal === 'Alligator')  {
        return 'small';
    }

    return 'wide';
}


var_dump(mouth_size('toucan'));//'wide');
var_dump(mouth_size('ant bear'));//'wide');
var_dump(mouth_size('alligator'));//'small');