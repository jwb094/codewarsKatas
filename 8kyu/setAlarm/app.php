<?php

  
function setAlarm(bool $employed, bool $vacation): bool {
  // your code here

    if($employed &&  $vacation){
        return false;
    }
      if(!$employed &&  $vacation){
        return false;
    }
        if($employed &&  !$vacation){
        return true;
    }
          if(!$employed &&  !$vacation){
        return false;
    }

}