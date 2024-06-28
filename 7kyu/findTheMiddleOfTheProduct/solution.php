<?php






function findMiddle($str){
    //Code here...
    preg_match_all('/[0-9]{1}/', $str, $matches); 
    $matches = array_product($matches[0]);
    $numberLength = strlen((string)$matches);
    $numbersInsStrings = (string)$matches;
    
    if (strlen((string)$matches) % 2 !== 0) {
        $numbersInsStrings = str_split($numbersInsStrings);
        return (int)$numbersInsStrings[floor($numberLength % 2)];
    }
    

    if (strlen((string)$matches) % 2 === 0) {
        $numbersInsStrings = str_split($numbersInsStrings);
        $left = (int)$numbersInsStrings[($numberLength /2)-1];
        $right = (int)$numbersInsStrings[($numberLength /2)];
        return intval($left.$right);
    }
}



var_dump(findMiddle('s7d8jd9'));
var_dump(findMiddle('58jd9fgh/fgh6s.,sdf'));
var_dump(findMiddle('58jd9fgh4/fg4h66s.,sdf'));
