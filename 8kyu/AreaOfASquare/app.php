Complete the function that calculates the area of the red square, when the length of the circular arc A is given as the input.

Note: use the π value provided in your language (Math::PI, M_PI, math.pi, etc)

<?php

function square_area(float $a): float {

  // Stage 1: Calculate radius
    $radius = (2 * $a) / pi();

    // Stage 2: Calculate diameter
    $diameter = $radius * 2;
    // Stage 3: Calculate square area
    $area = ($diameter ** 2 / 2) /2;
    // Stage 4: Return the result
    return $area;
}