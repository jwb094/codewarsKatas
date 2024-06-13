<?php
function odd_or_even(array $a): string {
    return  (array_sum($a) % 2 === 0) ? 'even': 'odd';
  }

  var_dump(odd_or_even([0]));//'even'
  var_dump(odd_or_even([2, 5, 34, 6]));//'odd'
  var_dump(odd_or_even([0, -1, -5]));//'even'