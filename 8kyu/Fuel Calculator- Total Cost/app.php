<?php

 function fuelPrice($litres, $pricePerLitre) {

   
    //var Price = (litres * pricePerLitre).toFixed(2);
    for ($i = 2; $i <= 10; $i+= 2) {
      if( $litres >= $i){
        $pricePerLitre -+ 0.05;
      }    
    }

    return  ($litres * $pricePerLitre);
  }


  ?>