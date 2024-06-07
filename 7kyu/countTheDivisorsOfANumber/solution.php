<?php


function divisors($n) {
    // your code here
    if ($n == 1) {
        return 1;
    }
    return count(array_filter(range(1, $n), fn($var) => $n % $var === 0 ));

    /**
     * Explain MY logic
     * If $n = 1 return 1
     * count the return from the array_filter()
     * Array Filter = filter the Array
     * Range instead of using loop to count up or count down using range() to created the array
     * builtin function() check that the $n given divided by integer equal 0 
     */
  }



var_dump(divisors(1));
var_dump(divisors(10));
var_dump(divisors(11));
var_dump(divisors(54));
var_dump(divisors(64));