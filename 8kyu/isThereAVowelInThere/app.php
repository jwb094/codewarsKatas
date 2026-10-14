<?php
  
function isVow(array $a): array{
         return array_map(function(int $value): mixed {
        if (in_array(chr($value), ['a','e','i','o','u'])) {
            return chr($value);
        }
        return $value;
    }, $a);
}