<?php

function multiTable(int $number): string {
    $multiTableString = "";
    for ($index = 1; $index <= 10; $index++) {
        $result = $index * $number;
        if ($index < 10) {
            $multiTableString .= "{$index} * {$number} = {$result}\n";
        } else {
            $multiTableString .= "{$index} * {$number} = {$result}";
        }
    }
    return  $multiTableString;
}