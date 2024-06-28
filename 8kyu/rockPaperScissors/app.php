<?php

function rpc ($p1, $p2) {
    #you code here
$whoWontheBattle =array (
 
                   /*Player2*/ 
    /*Player1*/     array ("D","L","W"),
                    array ("W","L","D"),
                    array("L","W","D")
    
  );


  var_dump($whoWontheBattle[$p1][$p2]);
}




var_dump(rpc ($p1 = "rock" , $p2 = "scissors"));