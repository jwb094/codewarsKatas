<?

function isPalindrome(string $str): bool {
    return  ($str === implode("",array_reverse(str_split($str)))  || 
            strtolower($str) === strtolower(implode("",array_reverse(str_split($str))))) ? true: false;
}
