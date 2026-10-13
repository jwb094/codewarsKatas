<?php
/**
Implement the function generateRange which takes three arguments (start, stop, step) and returns the range of integers from start to stop (inclusive) in increments of step.
*/

/**
 * Summary of generateRange
 * @param int $min
 * @param int $max
 * @param int $step
 * @return array
 */
function generateRange(int $min, int $max, int $step): array{
    return range($min,$max,$step);
}
