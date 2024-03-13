<?php



function wordsToMarks(string $str) {


    $alphabet   = array('a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','V','w','x','y','z');

    $total = 0;
    for ($i=0; $i < count(str_split($str)); $i++) { 
        $key = array_search(str_split($str)[$i], $alphabet);
        if ($key !== false) {
                $total += $key+1; 
            }
    }
return $total;

}
var_dump(wordsToMarks("attitude"));//100
var_dump(wordsToMarks("friends"));//75
 var_dump(wordsToMarks("family"));//66
 var_dump(wordsToMarks("selfness"));//99
 var_dump(wordsToMarks("knowledge"));//96