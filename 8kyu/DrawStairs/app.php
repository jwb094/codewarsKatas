<?php
function draw_stairs(string $n): string {
    $stairs = "";
    for($index =1; $index <= $n;$index++){
      $stairs .= ($index === $n) ? "I" : "I\n".str_repeat(" ",$index);
    }
    return $stairs;
}