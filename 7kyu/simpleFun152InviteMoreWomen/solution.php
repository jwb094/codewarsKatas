<?php

function invite_more_women(array $a)
{
  // Coding and coding ... 

  $ladies = count(array_filter($a, "women_count"));

  $men = count(array_filter($a, "men_count"));



  if ($men == $ladies) {
    return false;
  }
  if ($men > $ladies) {
    return true;
  }
  if ($men < $ladies) {
    return false;
  }
  //Solution #2
  if (count(array_filter($a, "men_count")) == count(array_filter($a, "women_count"))) {
    return false;
  }
  if (count(array_filter($a, "men_count")) > count(array_filter($a, "women_count"))) {
    return true;
  }
  if (count(array_filter($a, "men_count")) < count(array_filter($a, "women_count"))) {
    return false;
  }

  //solution 3

  if(count(array_filter($a, fn($var) =>$var > 0 )) == count(array_filter($a, fn($var) =>$var < 0 ))){
    return false;
  }

  if(count(array_filter($a, fn($var) =>$var > 0 )) > count(array_filter($a, fn($var) =>$var < 0 ))){
    return true;
  }

  if(count(array_filter($a, fn($var) =>$var > 0 )) < count(array_filter($a, fn($var) =>$var < 0 ))){
    return false;
  }

  }
//  return count(array_filter($a, "men_count")) == count(array_filter($a, "women_count")) ? true : false;




function women_count($var)
{
  if ($var < 0) {
    return $var;
  }
}
function men_count($var)
{
  if ($var > 0) {
    return $var;
  }
}

var_dump(invite_more_women([1, -1, 1]));
var_dump(invite_more_women([1, 1, 1]));
var_dump(invite_more_women([-1, -1, -1]));
var_dump(invite_more_women([1, -1]));
