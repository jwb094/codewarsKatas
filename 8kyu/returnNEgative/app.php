<?php

function makeNegative($num) {
    //print_r($num > 0 ? -$num : -$num);

      $result = $num >= 0 ? -$num : $num;

      return $result;
     // print_r( $result );
}

makeNegative(7);
makeNegative(-20);
makeNegative(0);
makeNegative(0.12);