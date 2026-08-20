<?php

function bonusTime(int $salary,bool $bonus): string {
  return ($bonus === true) ? (string) "$".$salary * 10 : (string) "$".$salary ;
}

var_dump(bonusTime(10000, true));
var_dump(bonusTime(25000, true));
var_dump(bonusTime(10000, false));