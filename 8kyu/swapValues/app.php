<?php

function swap_pair(array &$pair): array
{

    $temp = $pair[0];
    $pair[0] = $pair[1];
    $pair[1] = $temp;

    return $pair;
}
