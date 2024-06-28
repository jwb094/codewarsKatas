<?php 

function solve($s) {
    // your code here
    //var_dump(preg_split('/[a-z]/',$s));
    preg_match_all('/[0-9]{1,}/',$s,$matches);
    sort($matches[0]);
    return (int)end($matches[0]);
   // var_dump((int)end($matches[0]));
  }



  var_dump( solve('gh12cdy695m1'));
  var_dump(solve('2ti9iei7qhr5'));
  var_dump( solve('vih61w8oohj5'));
var_dump(solve('f7g42g16hcu5'));
var_dump(solve('lu1j8qbbb85'));