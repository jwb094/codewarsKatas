<?php

function positive_sum($arr) {
  // Your code here
//print_r($arr);
  if (empty($arr)) {
    return 0;
  } else{

  $noNegative = array_filter($arr,"removeNegative");

  //print_r($noNegative);

  return  empty($noNegative) ? 0 : array_reduce($noNegative,"positiveTotal");
  }

}


function removeNegative($var)
{
  return($var >= 0);
}

function positiveTotal($v1,$v2)
{
return $v1+$v2;
}


print_r(positive_sum([1, 2, 3, 4, 5]));
print_r("\n");
print_r(positive_sum([1, -2, 3, 4, 5]));
print_r("\n");
print_r(positive_sum([]));
print_r("\n");
print_r(positive_sum([-1, -2, -3, -4, -5]));
print_r("\n");
print_r(positive_sum([-1, 2, 3, 4, -5]));