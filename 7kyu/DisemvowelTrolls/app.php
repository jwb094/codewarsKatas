<?php

function disemvowel(string $s)
{

    $str = explode(" ", $s);

    for ($i = 0; $i < count($str); $i++) {
        $str[$i] = preg_replace('/[aeiou]/i', "", $str[$i]);
    }

    return implode(" ", $str);
}



print_r(disemvowel("This website is for losers LOL!"));//, "Ths wbst s fr lsrs LL!"