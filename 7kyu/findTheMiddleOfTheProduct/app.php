<?php






function findMiddle($str){
    //Code here...


//    preg_match_all('!\d+!', $str, $matches); 
    preg_match_all('/[0-9]{1}/', $str, $matches); 
  
    $matches = array_product($matches[0]);
    //var_dump($matches);
    //var_dump($matches);
    $numberLength = strlen((string)$matches);
   // var_dump($numberLength);
    $numbersInsStrings = (string)$matches;

   // var_dump(strlen((string)$matches) % 2);
    
    if (strlen((string)$matches) % 2 !== 0) {
        // var_dump(str_split($numbersInsStrings));
        //var_dump(floor($numberLength % 2));
        $numbersInsStrings = str_split($numbersInsStrings);
        return (int)$numbersInsStrings[floor($numberLength % 2)];
    }
    

    if (strlen((string)$matches) % 2 === 0) {
        $numbersInsStrings = str_split($numbersInsStrings);
        //var_dump($numbersInsStrings);
        //var_dump();
        $left = (int)$numbersInsStrings[($numberLength /2)-1];
        $right = (int)$numbersInsStrings[($numberLength /2)];
        return intval($left.$right);
    }
    // $sum = 0;

















    

    // for ($i=0; $i <= count($matches)-1; $i++) { 
    //     $sum =. $matches[$i] * $matches[$i+1];
    // }
   // var_dump(array_product($matches));
}



var_dump(findMiddle('s7d8jd9'));
var_dump(findMiddle('58jd9fgh/fgh6s.,sdf'));
var_dump(findMiddle('58jd9fgh4/fg4h66s.,sdf'));
