<?php


  
function seatsInTheater(int $nCols, int $nRows, int $col, int $row): int{

  return  (($nCols - $col)+1) * ($nRows - $row);
}