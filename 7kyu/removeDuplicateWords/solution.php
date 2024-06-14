<?php



function removeDuplicateWords($s) {
    return implode(' ',array_unique(explode(' ',$s)));
  }

removeDuplicateWords('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta');