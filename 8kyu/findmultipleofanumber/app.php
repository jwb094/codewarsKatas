<?php

function findMultiples(int $integer, int $limit): array{

    $ans = [];
    $index = $integer;
    do {
        ( $index % $integer  == 0) ? array_push($ans,$index) : null;
        $index++;

    } while ($index <= $limit);
  
    return $ans;
}





print_r(findMultiples(5, 25));
print_r(findMultiples(1, 2));
print_r(findMultiples(5, 7));
print_r(findMultiples(4, 27));
print_r(findMultiples(11, 54));