<?php


function twoSort(array $arr)
{
    sort($arr);

    $first = current($arr);
    $first = implode("***", str_split($first));
    return $first;
}
