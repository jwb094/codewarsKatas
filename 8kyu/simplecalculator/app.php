<?php
function calculator($a, $b, $sign) {
    // Your code here
//var_dump(gettype($a));
//$arrayName = array("+","-","/","*");
    if (is_int($a) === false) {
        return "unknown value";
    }
    if (is_int($b) === false) {
        return "unknown value";
    }
   // var_dump(is_int($b));
    switch ($sign) {
        case '+':
            return ($a + $b);
            break;
        case '-':
            return ($a - $b);
                break;
        case '/':
            return ($a / $b);
                    break;
        case '*':
            return ($a *$b);
                break;
        default:
            return "unknown value";
        break;
    }

    // if ($sign !== "+"|| $sign !== "-" || $sign !== "/" || $sign !== "*" ) {
    //     return "unknown value";
    // }
  //  return eval($a.$sign.$b);
}


var_dump(calculator(1, 2, "+"));//3
var_dump(calculator(1, 2, "-"));//-1
var_dump(calculator(3, 5, "*"));//15
var_dump(calculator(6, 2, "/"));//3
var_dump(calculator(6, 2, "$"));//"unknown value"
var_dump(calculator(6, "h", "*"));//("unknown value"