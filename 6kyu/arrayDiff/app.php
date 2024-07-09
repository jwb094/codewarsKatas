<?php

function arrayDiff($a, $b) {
    if (empty($b)) {
        return $a;
    }
    if (empty($a)) {
        return $a;
    }

    $result = array_diff($a, $b);
    return array_values($result);

  }


print_r(arrayDiff([1,2], [1]));//[2],, "a was [1,2], b was [1], expected [2]");
print_r(arrayDiff([1,2,2], [1]));//[2,2], , "a was [1,2,2], b was [1], expected [2,2]");//
print_r( arrayDiff([1,2,2], [2]));//[1],, "a was [1,2,2], b was [2], expected [1]");//
print_r(arrayDiff([1,2,2], []));//[1,2,2],, "a was [1,2,2], b was [], expected [1,2,2]");//
print_r(arrayDiff([], [1,2]));//[],, "a was [], b was [1,2], expected []");//
print_r(arrayDiff([1, 2, 3], [1,2]));//[3], "a was [1, 2, 3], b was [1,2], expected [3]");