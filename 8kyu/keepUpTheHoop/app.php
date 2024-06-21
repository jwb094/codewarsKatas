<?php

function hoopCount ($n)
{
   return $n >= 10 ? "Great, now move on to tricks" : "Keep at it until you get it";
}


var_dump(hoopCount(9));

var_dump(hoopCount(10));