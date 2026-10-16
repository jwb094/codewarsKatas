
The objective of Duck, duck, goose is to walk in a circle, tapping on each player's head until one is chosen.

Task:

Given an array of Player objects and a position (first position is 1), return the name of the chosen Player.
name is a property of Player objects, e.g Player.name

Example:

duck_duck_goose([$a, $b, $c, $d], 1); // => $a["name"]
duck_duck_goose([$a, $b, $c, $d], 5); // => $a["name"]
duck_duck_goose([$a, $b, $c, $d], 4); // => $d["name"]
<?php

function duck_duck_goose(array $players,int $goose) {
  // Write your code here
    if(array_key_exists($goose-1,$players)) return $players[$goose-1]["name"] ;

    if(!array_key_exists($goose-1,$players)){
        return ($goose % count($players) === 0 ) 
                ?  end($players)["name"] 
                : $players[floor($goose % count($players))-1]["name"];

    }
}