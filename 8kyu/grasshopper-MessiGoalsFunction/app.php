<?php
  
function goals (int $laLigaGoals, int $copaDelReyGoals, int $championsLeagueGoals) : int {
  return array_sum([$laLigaGoals, $copaDelReyGoals, $championsLeagueGoals]); // code goes here
}
