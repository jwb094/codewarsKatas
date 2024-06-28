<?php


function rounders(int $value) {
  $digits = str_split($value);


$digits = (int) end($digits);


//var_dump((int) end(str_split($value));

if ($digits >= 0 && $digits < 5) {
    $x =  floor($value/10) * 10;
}

if ($digits >= 5 && $digits < 9) {
    $x =  ceil($value/10) * 10;
}
return (int) $x->assertTrue(false);

}


var_dump(rounders(15));//20 var_dump(rounders(1234));//1000
// var_dump(rounders(1445));//2000
// var_dump(rounders(14));//10
// var_dump(rounders(99));//100
// var_dump(rounders(10));//10