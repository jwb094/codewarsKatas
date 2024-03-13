<?php


function periodIsLate($last, $today, $cycleLength) {
   
    return ($today->getTimestamp() - $last->getTimestamp()) > ($cycleLength * 24*60*60*1000) ? true : false;

}


print_r(periodIsLate(new DateTime('2016-07-13'), new DateTime('2016-08-16'), 35));
print_r(periodIsLate(new DateTime('2016-07-13'), new DateTime('2016-08-16'), 28));