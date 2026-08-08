<?php
function lovefunc(int $flower1, int $flower2){

    return  ($flower1 + $flower2) % 2 != 0 ? true : false;
   
}

print_r(lovefunc(1, 4));
print_r(lovefunc(2, 2));
print_r(lovefunc(0, 1));
print_r(lovefunc(0, 0));