<?php


function avgArray($arr) {
    // your code here
    var_dump(count($arr));
    $avgArray = [];
    for ($i=0; $i < count($arr); $i++) { 
        # code...
        $avgArray[$i]=  $arr[$i];
    }
    var_dump($avgArray);
    for ($i=0; $i < count($avgArray); $i++) { 
        # code...
        var_dump($avgArray[$i][$i]);
    }
  //  var_dump($avgArray);
}


var_dump(avgArray([[1, 2, 3, 4], [5, 6, 7, 8]]));
//var_dump(avgArray([[2, 3, 9, 10, 7], [12, 6, 89, 45, 3], [9, 12, 56, 10, 34], [67, 23, 1, 88, 34]]));