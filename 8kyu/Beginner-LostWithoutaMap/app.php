<?php


  
function maps(array $arr): array{


  return array_map(function ($value){return $value * 2;},$arr);
}