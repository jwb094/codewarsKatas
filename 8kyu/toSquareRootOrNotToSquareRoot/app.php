
<?php
  
function squareOrSquareRoot(array $array): array {

return array_map(function (int $value) {

    $sqrtValue = sqrt($value); 
    if ( strpos( (string)$sqrtValue, "." ) !== false ) {
       return $value * $value;
    } else {
        return (int) sqrt($value);
    }

}, $array);

}


