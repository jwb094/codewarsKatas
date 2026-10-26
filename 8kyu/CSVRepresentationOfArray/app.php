<?php
function toCsvText(array$array): string{
    $str ='';
    foreach($array as $index => $key){
        for($i=0; $i <= count($key) - 1; $i++){
            if($i === count($key) - 1){
                 if($index === count($array) - 1){
                     $str .= $key[$i];
                 } else{
                $str .= $key[$i].'\n';
                 }
            }else{
                  $str .= $key[$i].',';
            }
}

 
}
  return $str;
}