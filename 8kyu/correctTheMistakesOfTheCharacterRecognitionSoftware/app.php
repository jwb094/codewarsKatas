<?php

function correct(string $string): string
{

    $string = str_replace("0", "O", $string);
    $string = str_replace("1", "I", $string);
    $string = str_replace("5", "S", $string);

    return $string;
}
