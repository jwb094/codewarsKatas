<?php


function determine_time(array $durations) {


    if (empty($durations)) {
        return true;
    }
    // Have fun with coding ^.^
    $totalDeliveryTime ="";

    // for ($i=0; $i < ; $i++) { 
    //     # code...
    // }
    foreach ($durations as $key => $value) {
        # code...
     //   print_r($value);
        $totalDeliveryTime =+ strtotime($totalDeliveryTime) + strtotime($value);
    }


    $diff =  strtotime($totalDeliveryTime) - strtotime("00:24:00");
//    print_r(date("H:i:s",strtotime($totalDeliveryTime)) ."|". date("H:i:s",strtotime("00:24:00")));
// print_r($diff > );
//print_r(date("H:i:s",$totalDeliveryTime).''.date("H:i:s",strtotime("00:24:00")));
//print_r(strtotime("00:24:00"));
// return (date("H:i:s",strtotime($totalDeliveryTime)) date("H:i:s",strtotime("00:24:00"))) ? true : false ;
}

  var_dump(determine_time(["00:30:00", "02:30:00", "00:15:00"]));
  var_dump(determine_time([]));
  var_dump(determine_time(["12:00:00", "12:00:00"]));
  var_dump(determine_time(["06:00:00","12:00:00","06:30:00"]));