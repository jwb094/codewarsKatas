<?php

function replace_dots(string $str): string {
    return str_replace('.', '-', $str);
  }
/*
function replace_dots(string $str): string {
    return preg_replace('/./', '-', $str);
  }
*/


  print_r(replace_dots('one.two.three'));