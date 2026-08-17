<?php
function getSize(int $width,int $height,int $depth): array {
  // write some code

  return [(($depth * $width * 2) + 
  ($width * $height * 2) + 
  ($depth * $height * 2)), $depth * $width * $height];
}


var_dump(getSize(4,2,6));