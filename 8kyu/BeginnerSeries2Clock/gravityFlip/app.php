<?php
  
function flip(string $dir, array $arr): array {

    if($dir === "R"){
         sort($arr);
    }
    if($dir === "L"){
       rsort($arr);
    }
    return $arr;

}