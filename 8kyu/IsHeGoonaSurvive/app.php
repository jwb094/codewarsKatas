<?php
  
function hero(int $bullets, int $dragons): bool{
  return ($bullets / 2) >= $dragons ? true : false;
}