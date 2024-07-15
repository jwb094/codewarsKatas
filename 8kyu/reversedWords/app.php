<?php

function reverseWords($str) {
    return implode(" ",array_reverse(explode(" ",$str))); // reverse those words
  }
