<?php

 function between(int $a, int $b): array {
$numbers =[];

for($index = $a; $index <= $b; $index++){
    array_push($numbers,$index);
}

  return $numbers;
}

var_dump(between(1,4));