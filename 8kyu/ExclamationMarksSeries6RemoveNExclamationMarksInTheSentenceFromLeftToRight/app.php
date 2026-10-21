<?php


function remove(string $s, int $n)
{
    $result = "";
    $count = 0;
    foreach (str_split($s) as $char) {
        if ($char === "!") {
            if ($count < $n) {
                $count++;
            } else {
                $result .= $char;
            }
        } else {
            $result .= $char;
        }
    }
    return $result;
}
