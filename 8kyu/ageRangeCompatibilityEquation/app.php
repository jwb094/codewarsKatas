<?php

function datingRange($age) {
    #return min-max
    $min = 0;
    $max = 0;
    if ($age <= 14) {
        # code...
        $min = $age-0.10*$age;
        $max = $age+0.10*$age;
    } else{
        $min = floor($age  / 2 + 7);
        $max = floor(($age  - 7) *2);
    }
return ''.$min.'-'.$max.'';
//    return ($age <= 14) ? `${age-0.10*age}-${age+0.10*age}` : `${Math.floor(age  / 2 + 7)}-${Math.floor((age  - 7) *2) }` ;
//return ($age <= 14) ? "".($age-0.10*$age)-($age+0.10*$age)."" : floor($age  / 2 + 7)-floor(($age  - 7) *2) ."";

  }


  print_r(datingRange($age=17));
  print_r(datingRange($age= 40));
  print_r(datingRange($age= 15));
   print_r(datingRange($age= 35));
   print_r(datingRange($age= 10));