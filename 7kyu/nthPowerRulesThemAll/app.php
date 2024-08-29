<?php


function modified_sum(array $a, int $n) {
    // Your code here
    return array_sum(array_map(fn($i) => pow($i,$n),$a)) - array_sum($a);
  }