<?php

function square_digits($num): int {
  $digits ='';
   for ($i=0; $i < strlen($num); $i++) { 
      $digits .= pow(str_split($num)[$i],2);
  }
return (int)$digits;
}



}


var_dump(square_digits(9119));
var_dump(square_digits(24680));