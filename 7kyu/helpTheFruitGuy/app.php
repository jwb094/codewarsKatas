<?php


function removeRotten($fruitBasket) {

    if (empty($fruitBasket)) {
        return [];    
    } 


    foreach ($fruitBasket as $key => $value) {
        # code...

        if (str_contains($value,"rotten")) {
           $fruitBasket[$key] = strtolower(substr($value, strlen("rotten")));
            //$value = trim($value,"rotten");
        }
       // print_r($value);
    }
   // print_r(    array_filter($fruitBasket,"nolongerRotten"));

return $fruitBasket;
  }

/*
  return  array_map("nolongerRotten",$fruitBasket);
   function nolongerRotten($fruit){

    return strtolower(str_replace("rotten", "",$fruit));
   }
 */
//   function nolongerRotten($fruit){
//     //if (str_contains($fruit,"rotten")){
// if(substr($fruit, 0, strlen("rotten")) == "rotten"){
//         //print_r($fruit);
//        //$fruit = trim($fruit,"rotten");
//        $fruit = substr($fruit, strlen("rotten"));
//       // print_r(gettype($fruit));
//     }
//     return $fruit;
//   }
//var_dump(removeRotten([]));
var_dump(removeRotten(["apple","rottenBanana","kiwi","rottenMango"]));