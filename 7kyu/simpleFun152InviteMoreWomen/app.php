<?php 

function invite_more_women(array $a){
    // Coding and coding ... 

 //   $ladies = count(array_filter($a, "women_count"));

   // $men = count(array_filter($a, "men_count"));

//     $men = array_filter($a, function($pos) {
//         if($pos > 0) {return $pos;}
//    });
//var_dump($ladies);
$test = count(array_filter($a, fn($var) =>$var > 0 ));


print_r($test);
if (count(array_filter($a, "men_count")) == count(array_filter($a, "women_count"))) {
    return false;
}
if (count(array_filter($a, "men_count")) > count(array_filter($a, "women_count"))) {
    return true;
}
if (count(array_filter($a, "men_count")) < count(array_filter($a, "women_count"))) {
    return false;
}

    return count(array_filter($a, "men_count")) == count(array_filter($a, "women_count")) ? true : false;

//    count(array_filter($a, "men_count")) > count(array_filter($a, "women_count")) ? true : ;

   // count(array_filter($a, "men_count")) < count(array_filter($a, "women_count")) ? true : false;
}

  function women_count($var){
    if($var < 0) {return $var;}
  }
  function men_count($var){
    if($var > 0) {return $var;}
  }

  var_dump(invite_more_women([1, -1, 1]));
  var_dump(invite_more_women([1, 1, 1]));
  var_dump(invite_more_women([-1, -1, -1]));
  var_dump(invite_more_women([1, -1]));