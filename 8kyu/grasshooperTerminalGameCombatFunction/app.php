<?php

function combat($health, $damage) {
    # Good luck
    //var_dump($health - $damage );
    // if (($health -$damage  ) < 0) {
    //     return 0;
    // }
   return(($health -$damage  ) < 0) ? 0 : $health -$damage ;
  }

  var_dump( combat(92, 8));