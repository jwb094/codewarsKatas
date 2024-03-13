<?php

function even_or_odd(int $n) {
    // Your code here

    return  ($n % 2 == 0) ? "Even " : "Odd" ;

  }

  echo(even_or_odd(2));
  echo(even_or_odd(23));
  echo(even_or_odd(1));
  echo(even_or_odd(-3));