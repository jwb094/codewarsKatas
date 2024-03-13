<?php

function similarity(array $a, array $b) {
    // Coding and coding ... 

    //var_dump((array_diff_assoc($a,array_unique($b))));
   // var_dump(array_diff_assoc($a,$b));

  // var_dump(array_intersect($a, $b));
    //var_dump(count($a)+count($b));
    //var_dump(count(array_intersect($a, $b)));

/*
    $duplicates = count(array_intersect($a, $b));
    $nonDuplicates = count(array_count_values(array_merge($a, $b)));
    print_r($duplicates /$nonDuplicates);*/
    //$nonDuplicates = array_diff($a, $b);
    //var_dump($duplicates);
    //var_dump($nonDuplicates);
    //print_r( round(count(array_intersect($a, $b)) / count($a)+count($b)) ) ;


    return count(array_intersect($a, $b)) / count(array_count_values(array_merge($a, $b)));
  }





  /*(1, */
  var_dump(similarity([1, 2, 3], [1, 2, 3]));

  /*(0, */var_dump(similarity([1, 2, 3], [4, 5, 6]));

  /*(0.5, */var_dump(similarity([1, 2, 4, 6, 7], [2, 3, 4, 7]));

  /*(0.5, */var_dump(similarity([1, 2, 6, 8, 9], [0, 1, 4, 5, 6, 8, 9]));

  /*(0.5, */var_dump(similarity( [1, 2, 3, 4, 7, 9], [1, 2, 3]));

/*  (0.3125, */var_dump(similarity([0, 1, 3, 4, 5, 6, 9, 14, 15, 16, 17, 18, 19], [1, 4, 10, 12, 13, 14, 15, 16]));