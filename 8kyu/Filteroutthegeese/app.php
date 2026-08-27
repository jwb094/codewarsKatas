
<?php
function gooseFilter(array $birds): array {
    $geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    $geeseFiltered = [];
    foreach ($birds as $value) {
        if (!in_array($value, $geese)) {
            $geeseFiltered[] = $value;
        }
    }



    return $geeseFiltered;
}
