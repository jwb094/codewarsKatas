<?php


function count_red_beads(int $n): int {
    // Your code here

    return $n < 2 ? 0 : ($n * 2) -2;
  }