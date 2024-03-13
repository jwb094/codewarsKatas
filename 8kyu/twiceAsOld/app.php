<?php

function twice_as_old($dad_years_old, $son_years_old) {
    // Implement me
    $son_years_double = $son_years_old *2;

    return ($dad_years_old > $son_years_old *2) ? $dad_years_old - $son_years_old *2 : $son_years_old *2 - $dad_years_old;
}





print_r(twice_as_old(36,7));
print_r(twice_as_old(55,30));
print_r(twice_as_old(42,21));
print_r(twice_as_old(22,1));
print_r(twice_as_old(29,0));