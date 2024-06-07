<?php 

function highAndLow($numbers)
{   
    $arrayOfNums = explode(" ",$numbers);
        

        $arrayOfNums = array_map("convtoInt",$arrayOfNums);
        sort($arrayOfNums);

        $highest =end($arrayOfNums);
        $lowest = $arrayOfNums[0];
      return "".$highest." ".$lowest."";
}


function convtoInt($num){
    return(int)$num;
   }


var_dump( highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"));

//var_dump( highAndLow("1 2 3"));
//TODO
/*
EXPLAIN

turn string into an array of strings
secondly duplicate array using array_map and convert the strings into int
thirdly sort the arrange in ascending order using sort()

get the last end = highest 
get the first element = lowest
*/