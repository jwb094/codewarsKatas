<?

function subtractSum($n) {

$fruits = [
    "kiwi",
    "pear",
    "kiwi",
    "banana",
    "melon",
    "banana",
    "melon",
    "pineapple",
    "apple",
    "pineapple",
    "cucumber",
    "pineapple",
    "cucumber",
    "orange",
    "grape",
    "orange",
    "grape",
    "apple",
    "grape",
    "cherry",
    "pear",
    "cherry",
    "pear"
];
$min = min(array_keys($fruits));
$max = max(array_keys($fruits));


  do {
    // 1. Calculate the digit sum
    $total = array_reduce(
             str_split($n),fn($carry, $number) => $carry + $number,0
            );
    // 2. Update n
    $n =$n - $total;


 // 3. Check whether n maps to a fruit
    } while ($n >= $max );
         return $fruits[$n-1];
}