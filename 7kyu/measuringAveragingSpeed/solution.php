<?php


function calculate_speed($distance, $time) {
    // ...
    if (str_contains($distance,'km')) {
        $distance = preg_replace('/[A-Za-z\-]/', '', $distance);
        $distance = (1000*(int)$distance * 2.23694);
    }
    if (str_contains($distance,'m')) {
        $distance = preg_replace('/[A-Za-z\-]/', '', $distance);
        $distance = ((int)$distance * 2.23694);
    }
    if (str_contains($time,'s')) {
        $time = preg_replace('/[A-Za-z\-]/', '', $time);
        $time =(int)$time;
    }
    if (str_contains($time,'min')) {
        $time = preg_replace('/[A-Za-z\-]/', '', $time);
        $time =(int)$time*60;
    }


   return "". round(($distance/ $time)) ."mph";
}



    var_dump(calculate_speed("100m", "10s"));//"22mph"
    var_dump(calculate_speed("3km", "5min"));//"22mph"
    var_dump(calculate_speed("35m", "293s"));//0
    var_dump(calculate_speed("573km", "39min"));//548mph
