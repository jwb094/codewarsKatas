/**
Given three integers a, b, and c, return the largest number obtained after inserting the operators +, *, and parentheses (). In other words, try every combination of a, b, and c with the operators, without reordering the operands, and return the maximum value.
 */

<?php

function expressionMatter(int $a, int $b, int $c):int {
  return max( 
    [
    ($a + $b + $c),
    $a + $b * $c,
    $a * $b + $c,
    $a * $b * $c,
    $a + $b + $c,
    $a + ($b + $c),
    ($a + $b) * $c,
    $a * ($b + $c),
    $a * $b + $c,
    $a * ($b + $c),
    $a * $b * $c,
    $a * ($b * $c),
  ]);
}