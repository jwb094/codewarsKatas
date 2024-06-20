<?php
function orderedCount($text)
{
    if ($text === "") return [];
    $orderedCountOfCharacters = array();
    $letters = array_unique(str_split($text));
    $letters = array_values($letters);
    for ($i = 0; $i < count($letters); $i++) {
        $orderedCountOfCharacters[] = [$letters[$i], count(array_keys(str_split($text), $letters[$i]))];
    }

    return $orderedCountOfCharacters;
}
