<?php

function filter_lucky(array $a) {
    // Your code here
$luckyNumbers = array();
    for ($i=0; $i < count($a); $i++) { 
    //     $result = preg_match_all('/^7|.7/', $a[$i],$matches);
    //    // var_dump($result);
    //    var_dump($matches);

    //     if ($result === 0) {
    //     unset($a[$i]);
    //     }
        // if (!empty($matches)) {

        // }
        # code...
        if (strlen((string) $a[$i]) === 1 && ((string) $a[$i] == "7")) {
        array_push($luckyNumbers,$a[$i]);
        }
        if (strlen((string) $a[$i]) > 1){
    
           //$result = preg_match_all('/7/', $a[$i],$matches);
          // var_dump($result);
          $digitAsString = str_split((string) $a[$i]);
          //var_dump($digitAsString);
          if (end($digitAsString) === "7" ||  $digitAsString[0] === "7") {
         // var_dump((string) $a[$i]);
          array_push($luckyNumbers,$a[$i]);
          }
        }
    }
//var_dump($luckyNumbers);
return $luckyNumbers;
}

var_dump(filter_lucky([1, 2, 3, 4, 5, 6, 7, 68, 69, 70, 15, 17]));

var_dump(filter_lucky([71, 9907, 69]));



/**
 * (^7|.$7)
 */