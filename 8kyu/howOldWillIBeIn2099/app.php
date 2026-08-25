<?php
  
function calculate_age(int $year_of_birth, int $current_year): string {
    $answerStatement ="";

    if($current_year > $year_of_birth){
        $years = $current_year - $year_of_birth;
        $answerStatement = ($years > 1 ) ? "You are ".$years." years old" : "You are ".$years." year old";
    }

    if($current_year < $year_of_birth){
        $years = $year_of_birth - $current_year ;
        $answerStatement = ($years > 1 ) ? "You will be born in ".$years." years" : "You will be born in ".$years." year";
    }

      if($current_year === $year_of_birth){
        $answerStatement = "You were born this very year!";
      }

  return $answerStatement; 
}
