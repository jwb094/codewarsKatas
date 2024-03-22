<?php

function invert(array $a) {
    $b = [];
  //  for ($i=0; $i < count($a); $i++) { 
        // if ($a[$i] < 0) {
        //     $b[] =  $a;
        // } else {
        //  //   $b[] =  -$a;
        // }
    //     $a[] = $a[$i] <= 0 ? $a : -$a[$i];


    // }
    // var_dump($a);
        // return $a;

    foreach ($a as  $value) {
        # code...
        var_dump($value);
        $b[] = $value > 0 ? $value = -$value :  $value = -$value;
    }
    print_r($b);

  }

  invert([1, 2, 3, 4, 5]);
  invert([1, -2, 3, -4, 5]);