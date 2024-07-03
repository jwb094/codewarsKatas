<?php

function solution($str) {

if ($str === "") {
    return [];
}

$is_even = strlen($str) % 2 == 0;


if ($is_even !== true) {
    $str .= "_";

}

return str_split($str,2);

}



print_r(solution("abcdef"));
print_r(solution("abcdefg"));
print_r(solution(""));