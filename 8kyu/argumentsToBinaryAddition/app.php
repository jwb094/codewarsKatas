Given an array add all the number elements and return the binary equivalent of that sum; to make the code bullet proof anything else than a number should be added as 0 since it can't be added.

If your language can handle float binaries assume the array won't contain float or doubles.

arr2bin([1,2]) == '11'
arr2bin([1,2,'a']) == '11'
arr2bin([]) == '0'
Return "NaN" if the sum of all numbers is NaN.
<?php

function arr2bin(array $arr):string {
    $value = array_filter($arr, function($value, $k) {
        return is_numeric($value);
    }, ARRAY_FILTER_USE_BOTH)
    ;

    if(empty($value)) return "0";
    if(is_nan(array_sum($value)) || !is_int(array_sum($value))) return 'NaN';

    return decbin(array_sum($value));
}
