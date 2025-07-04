<?php

function invert(array $a) {
    $b = [];

    if (count($a) === 0 || empty($a)) {
     return $a;
    }
    foreach ($a as  $value) {
        $b[] = $value > 0 ? $value = -$value :  $value = -$value;
    }
    return $b;

  }

  invert([1, 2, 3, 4, 5]);
  invert([1, -2, 3, -4, 5]);
    invert([]);
  
    /*
      function invert(array $a): array {
  foreach ($a as $key => $value) {
        # code...
        $a[$key] = $value <= 0 ? $value : -$value;
    }
    return($a);
}
    */