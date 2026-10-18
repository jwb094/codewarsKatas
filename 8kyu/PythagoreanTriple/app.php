<?php
function pythagorean_triple($integers) {
    sort($integers);
    return (pow($integers[0],2) + pow($integers[1],2)) === pow($integers[2],2) ? 1 : 0;
}