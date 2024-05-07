<?php


function sum(array $a): float {
  // Your code here
  if (count($a) === 0) {
    return 0;
  }

  
  return array_reduce($a, "reduce");
}


function reduce($carry, $item)
{
    $carry += $item;
    return $carry;
}

var_dump(sum([])); //0);
var_dump(sum([1, 5.2, 4, 0, -1]));//9.2);