<?php 

function square_sum($numbers) {
    $ans =0;
    for ($i=0; $i < count($numbers); $i++) { 
       $ans += pow($numbers[$i],2);
    }
    return $ans;
    print_r($ans);
    // Write your code here...

    return [$positive,array_reduce($negative,"IntTotal")];

  }

    function IntTotal($v1,$v2){
        return $v1+$v2;
    }

 print_r(square_sum([1,2]));
 print_r("\n");
 print_r(square_sum([0, 3, 4, 5])); print_r("\n");
 print_r(square_sum([])); print_r("\n");
 print_r(square_sum([-1,-2])); print_r("\n");
 print_r(square_sum([-1,0,1])); print_r("\n");