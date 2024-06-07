<?php


// Return the two oldest/oldest ages within the array of ages passed in.
function twoOldestAges($ages) {

sort($ages);
return array_slice($ages, -2);

}

var_dump(twoOldestAges([1,5,87,45,8,8]));
var_dump(twoOldestAges([6,5,83,5,3,18]));
/*
$this->assertSame($results1[0], 45);
$this->assertSame($results1[1], 87);

$this->assertSame($results2[0], 18);
$this->assertSame($results2[1], 83);
*/