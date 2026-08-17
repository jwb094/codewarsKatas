<?
function howManyDalmations(int $number): string{
  
  $dogs  = ["Hardly any", 
  "More than a handful!", 
  "Woah that's a lot of dogs!", 
  "101 DALMATIANS!!!"];
  
  $respond = ($number <= 10) ? $dogs[0] 
            : ($number >10 && $number <= 50 ? $dogs[1] 
            : ($number >= 101 ? $dogs[3] : $dogs[2]));
  
return $respond;
}


var_dump(howManyDalmations(26));// "More than a handful!"]
var_dump(howManyDalmations(8));//"Hardly any"
var_dump(howManyDalmations(14));// "More than a handful!"
var_dump(howManyDalmations(80));//"Woah that's a lot of dogs!"
var_dump(howManyDalmations(100));//"Woah that's a lot of dogs!"
var_dump(howManyDalmations(101));// "101 DALMATIONS!!!
