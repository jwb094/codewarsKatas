<?php


function divisors($integer) {
    // Your code here

    $checkIfPrime = ifPrime($integer);
    $divisors = array();
    if ($checkIfPrime === true) {
        return  $integer.' is prime';
    }
    $n = 2;
        do {
           
            $integer % $n === 0 ?  array_push($divisors,$n) : null;
            $n++;
        } while ( $n < $integer );
        return $divisors;
}



function ifPrime($num){

    $numofFactor = 0;

    for ($index=1; $index <= $num ; $index++) { 
        $output =  fmod($num, $index);
       $output  == 0 ? $numofFactor++ : null;
    }
    
    return   $numofFactor > 2 ? false : true;
}


//var_dump(divisors(15));//  $this->assertSame([3, 5],);
//var_dump(divisors(12));//  $this->assertSame([2, 3, 4, 6], );
var_dump(divisors(13));// $this->assertSame('13 is prime', divisors(13));