<?php


function differenceInAges($ages) {

    return [min($ages),max($ages),(max($ages) - min($ages))];

}

var_dump(differenceInAges([82, 15, 6, 38, 35]));