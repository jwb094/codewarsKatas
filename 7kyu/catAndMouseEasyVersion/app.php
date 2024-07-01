<?php



function cat_mouse(string $s) {
    // Write your code here

    preg_match_all('/[.]/',$s,$matches);

    return (strlen(implode("",$matches[0])) > 3) ?  "Escaped!" : "Caught!" ;
  }

  var_dump(cat_mouse("C....m"));//"Escaped!"
  var_dump(cat_mouse("C..m"));//"Caught!",
  var_dump(cat_mouse("C.....m"));//"Escaped!"