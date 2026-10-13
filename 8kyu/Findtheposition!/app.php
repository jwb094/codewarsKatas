<?

/**
 * When provided with a letter, return its position in the alphabet.
 * Input :: "a"
 * Output :: "Position of alphabet: 1"
 * Note: Only lowercased English letters are tested
 * 
 * 
 * Summary of position
 * @param string $alphabet
 * @return string
 */
function position(string $alphabet): string 
{
 $index = (string)array_search($alphabet, $az = [
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "w",
        "x",
        "y",
        "z"]) +1;
    return "Position of alphabet: ".$index;
}