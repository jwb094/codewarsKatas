<?php

function whose_move(string $last_player, bool $win): string {
    // Coding and coding ... 

    if ($last_player === "black" && $win === true) {return  "black";}
    if ($last_player === "black" && $win === false) {return  "white";}
    if ($last_player === "white" && $win === true) {return "white";}
    if ($last_player === "white" && $win === false) {return "black";}
  }


  print_r(whose_move("black", false));
  print_r(whose_move("white", true));
  print_r(whose_move("white", false));