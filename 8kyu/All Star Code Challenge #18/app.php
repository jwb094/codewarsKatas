<?php


function strCount($str, $letter) {
  // code here

  //var_dump(str_split($str,1));

  $count=0;

    if ($str === '') {
        return 0;
    } else {

        $strSplitUp =  str_split($str,1);
        for ($i=0; $i < count($strSplitUp); $i++) { 
          ($strSplitUp[$i] === $letter) ? $count++ : 0 ;
        }

    }


  //var_dump($count);
  return $count;
}



strCount('Hello', 'o');
strCount('Hello', 'l');