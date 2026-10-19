<?php

// For the PHP version, you must use strict equality semantics rather than loose
// e.g. "1" !== 1
function solution(array $a,mixed $x) : bool {
    return in_array($x, $a,true) ? true : false;
}