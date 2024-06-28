<?php

function zeroFuel($distanceToPump, $mpg, $fuelLeft) {
    // Your code goes here.
    return($mpg *  $fuelLeft) === $distanceToPump ? true : false ;
  }



  var_dump( zeroFuel(50, 25, 2));
  var_dump( zeroFuel(100, 50, 1));