<?php
function flatten_and_sort($array) {
   $array = array_merge(...$array);
    sort($array,SORT_NUMERIC);
    return $array;
}