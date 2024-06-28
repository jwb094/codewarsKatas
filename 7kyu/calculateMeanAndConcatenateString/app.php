<?php





function mean(array $a)
{
    // Your code here
    $a = implode("", $a);
    preg_match_all('/[0-9]/', $a, $numbersMatches);
    preg_match_all('/[a-zA-Z]/', $a, $lettersMatches);
    $numbersMatches = $numbersMatches[0];
    $lettersMatches = $lettersMatches[0];

    return [array_sum($numbersMatches)/count($numbersMatches),implode("",$lettersMatches)];
}



var_dump(mean($lst =  ["u", "6", "d", "1", "i", "w", "6", "s", "t", "4", "a", "6", "g", "1", "2", "w", "8", "o", "2", "0"]));
