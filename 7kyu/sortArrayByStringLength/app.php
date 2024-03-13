<?php


function sortByLength ($toSort) {
    //
    usort($toSort,'arrangeByLength');
  
    return $toSort;
}

function arrangeByLength($a,$b){
    return strlen($a)-strlen($b);
}

print_r(sortByLength($toSort= array("Beg", "Life", "I", "To")));;

//print_r(sortByLength($toSort= array("", "Moderately", "Brains", "Pizza")));;

//print_r(sortByLength($toSort= array("Longer", "Longest", "Short")));;