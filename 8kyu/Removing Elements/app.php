Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

Example:
["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

None of the arrays will be empty, so you don't have to worry about that!


<?php

function removeEveryOther(array $array): array
{
    return array_filter($array, function ($value, $key) {
        return ($key === 0 || $key % 2 === 0);
    }, ARRAY_FILTER_USE_BOTH);
}

/*

    return array_filter($array, function ($key) {
        return ($key === 0 || $key % 2 === 0);
    }, ARRAY_FILTER_USE_KEY);

*/