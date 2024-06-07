<?php

function smallEnough($a, $limit)
{   
   // $arrayOfNums = array_map("convtoInt",$arrayOfNums);
    //print_r(count(array_filter($a, fn($var) => $var < $limit )));

 // return


 return count($a) === count(array_filter($a, fn($var) => $var <= $limit )) ? true : false;
}

// function convtoInt($num){
//     return(int)$num;
//    }


var_dump(smallEnough([66, 101], 200));
var_dump(smallEnough([78, 117, 110, 99, 104, 117, 107, 115], 100));
var_dump(smallEnough([101, 45, 75, 105, 99, 107], 107));
var_dump(smallEnough([80, 117, 115, 104, 45, 85, 112, 115], 120));