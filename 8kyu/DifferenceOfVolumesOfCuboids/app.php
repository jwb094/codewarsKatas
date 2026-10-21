<?php
  
function findDifference(array $a, array $b): int {
  return abs(array_product($a) - array_product($b)); // write your code here
}