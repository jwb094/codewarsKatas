<?php

function format_money(float $amount) {
    // Your formatting code here


   return (string)"$".number_format((float)$amount, 2,'.','');
  }



  var_dump(format_money(39.99));
  var_dump(format_money(3.1));