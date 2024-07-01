<?php

function findDeletedNumber(array $arr, array $mixedArr) {
  // your code

  $findDeletedNumber = array_diff($arr,$mixedArr);
  $findDeletedNumber= array_values($findDeletedNumber);
 // var_dump($findDeletedNumber[0]);
  return $findDeletedNumber[0];
}


var_dump(findDeletedNumber([1,2,3,4,5,6,7,8,9], [3,2,4,6,7,8,1,9]));