<?php 

function highAndLow($numbers)
{   


    
    $arrayOfNums = explode(" ",$numbers);
        

        $arrayOfNums = array_map("convtoInt",$arrayOfNums);
        sort($arrayOfNums);
        //print_r($arrayOfNums);
       // print_r(sort($arrayOfNums,"smallToBig"));
  //  print_r($numbers = (int)$numbers);
  //return "";
  $highest =end($arrayOfNums);
  $lowest = $arrayOfNums[0];
return "".$highest." ".$lowest."";
//  return [array_pop($arrayOfNums),array_shift($arrayOfNums)];
}
//usort($str,'arrangeByLength');
function smallToBig($a,$b){
    return $a - $b;
}


function convtoInt($num){
    return(int)$num;
    //return intval($num);
   }


var_dump( highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"));

//var_dump( highAndLow("1 2 3"));