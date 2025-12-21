<?php

function validatePin(string $pin): bool
{
    //print_r(preg_match('/^[0-9]{6}$/', $pin));
    //print_r(preg_match('/^[0-9]{4}$/', $pin));

    return (preg_match('/^[0-9]{6}$/', $pin) || preg_match('/^[0-9]{4}$/', $pin)) ? true : false;

    //return false; // your code here
}

//true

print_r(validatePin(("1234"))); //true
print_r(validatePin(("0000"))); //true
print_r(validatePin(("1111"))); //true
print_r(validatePin(("123456"))); //true
print_r(validatePin(("098765"))); //true
print_r(validatePin(("000000"))); //true
print_r(validatePin(("123456"))); //true
print_r(validatePin(("090909"))); //true


//false
//print_r(validatePin(("1"))); //false
//print_r(validatePin(("12"))); //false
// print_r(validatePin(("123"))); //false
// print_r(validatePin(("12345"))); //false
// print_r(validatePin(("1234567"))); //false
// print_r(validatePin(("-1234"))); //false
// print_r(validatePin(("-12345"))); //false
// print_r(validatePin(("1.234"))); //false
// print_r(validatePin(("00000000")));//false
