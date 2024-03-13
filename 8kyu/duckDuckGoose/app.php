<?php
function duck_duck_goose($players, $goose) {
    // Write your code here
   // print_r(array_key_exists($goose-1,$players));
    //print_r($players[$goose-1]);
    return (array_key_exists($goose-1,$players)) ? $players[$goose-1]["name"] : $players[0]["name"] ;
  }



  print_r(duck_duck_goose([["name" => "Andre"], ["name" => "Beatrice"], ["name" => "Christina"], ["name" => "Daniel"]], 1));
  print_r(duck_duck_goose([["name" => "Andre"], ["name" => "Beatrice"], ["name" => "Christina"], ["name" => "Daniel"]], 5));
  print_r(duck_duck_goose([["name" => "Andre"], ["name" => "Beatrice"], ["name" => "Christina"], ["name" => "Daniel"]], 4));