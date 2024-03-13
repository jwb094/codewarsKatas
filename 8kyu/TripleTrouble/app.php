<?php

function triple_trouble(string $one, string $two, string $three): string {
    // Your code here
    $output = array();
    $one_pieces = str_split($one);
    $two_pieces = str_split($two);
    $three_pieces = str_split($three);
    // $two_pieces =  explode(" ",$two);
    // $three_pieces = explode(" ",$three);

    // var_dump($one_pieces);
    // var_dump($two_pieces);
    // var_dump($three_pieces);

    for ($i=0; $i < count($one_pieces) ; $i++) { 
        # code...
        array_push($output,$one_pieces[$i],$two_pieces[$i],$three_pieces[$i]);
    }
    //var_dump($output);
    return implode($output);
}

 var_dump(triple_trouble("this","test","lock"));
 var_dump(triple_trouble("aa","bb","cc"));
 var_dump(triple_trouble("Bm","aa","tn"));
 var_dump(triple_trouble("LLh","euo","xtr"));