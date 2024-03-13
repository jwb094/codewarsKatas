<?php
function shortLongShort(string $s1, string $s2){
    return ( strlen($s1)  < strlen($s2) ) ?  $s1.$s2.$s1 : $s2.$s1.$s2; 
}



var_dump(shortLongShort('45', '1'));
var_dump(shortLongShort('Soon', 'Me'));
var_dump(shortLongShort('13', '200'));
