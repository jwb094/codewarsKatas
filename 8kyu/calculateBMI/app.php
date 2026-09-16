<?php
/**
 * Write function bmi that calculates body mass index (bmi = weight / height2).

*if bmi <= 18.5 return "Underweight"

* if bmi <= 25.0 return "Normal"

* if bmi <= 30.0 return "Overweight"

* if bmi > 30 return "Obese"
 * 
 * @param int $weight
 * @param float $height
 * @return string
 */
function bmi(int $weight,float $height) {

   $bmi = $weight / ($height ** 2);
      if ($bmi <= 18.5) {
        return 'Underweight';
    }
    if ($bmi <= 25.0) {
        return 'Normal';
    }
    if ($bmi <= 30.0) {
        return 'Overweight';
    }
    if ($bmi > 30) {
        return 'Obese';
    } 
}