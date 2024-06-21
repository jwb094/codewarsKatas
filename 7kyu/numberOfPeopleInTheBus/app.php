<?php

function number($bus_stops) {
    // Good luck, enjoy!
    $total=0;
    for ($i=0; $i < count($bus_stops); $i++) { 
        $total +=   array_shift($bus_stops[$i]) -  end($bus_stops[$i]);
    }
   // var_dump($total);
    return $total;
    }


var_dump(number([[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]]));
var_dump(number([[10,0],[3,5],[5,8]]));