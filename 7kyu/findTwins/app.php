<?php 
function elimination($arr){ 
    $dups = array();
   // var_dump(array_count_values($arr));
    foreach(array_count_values($arr) as $val => $c){
        //var_dump($c);
        if($c > 1) $dups[] = $val;
    }
     var_dump(array_search(2,array_count_values($arr)));
    return $dups[0];
}



var_dump(elimination([1, 5, 87, 45, 8, 8]));//8
//var_dump(elimination([1, 5, 4, 4]), 4);
//var_dump(elimination([1, 5, 4]), null);
//var_dump(elimination([1, 1, 115, 4543, 1176]), 1);
//var_dump(elimination([]), null);




    