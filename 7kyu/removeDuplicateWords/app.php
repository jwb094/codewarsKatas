<?php



function removeDuplicateWords($s) {
    var_dump(implode(' ',array_unique(explode(' ',$s))));
    return "";
  }

removeDuplicateWords('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta');