<?php
function flatten_and_sort($array) {
    //print_r(array_merge(...$array));
   
    $array = array_merge(...$array);
    sort($array,SORT_NUMERIC);
    return $array;
    // array_merge($array1, $array2);
}



print_r(flatten_and_sort([[]]));//[]
print_r(flatten_and_sort([[], []]));//[]
print_r(flatten_and_sort([[], [1]]));//[1]
print_r(flatten_and_sort([[], [], [], [2], [], [1]]));////[1,2]
print_r(flatten_and_sort([[3, 2, 1], [7, 9, 8], [6, 4, 5]]));//[1, 2, 3, 4, 5, 6, 7, 8, 9]
print_r(flatten_and_sort([[1, 3, 5], [100], [2, 4, 6]]));//1, 2, 3, 4, 5, 6, 100]
print_r(flatten_and_sort([[111, 999], [222], [333], [444], [888], [777], [666], [555]]));//[111, 222, 333, 444, 555, 666, 777, 888, 999]
