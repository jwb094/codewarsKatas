<?php

class RoundToNearest
{
  public static function roundUp(int $number, array $list)
  {
    $nearestNumbers = array();

    array_push($nearestNumbers,$number);
    //var_dump($nearestNumbers);
    $nearestNumbers = array_merge($nearestNumbers,$list);
    sort($nearestNumbers);

    $key = array_search($number, $nearestNumbers); 
    var_dump($key);
    
    return [$nearestNumbers[$key-1],$nearestNumbers[$key+1]];
   // foreach ($list as $key => $value) {
        # code...
        // print_r($value - $number);
        // if ($value - $number === 1 || $number - $value === 1) {
        //     print_r($value);
        //    ////array_push($nearestNumbers,$value);
        // }
 //       $nearestNumbers[$key] = [[$value][]]

    //}

     //return $nearestNumbers;
  }
}





var_dump(RoundToNearest::roundUp(10, [1, 2, 4, 8, 16, 32]));
var_dump( RoundToNearest::roundUp(-120, [-10, -20, -40, -80, -160, -320]));

