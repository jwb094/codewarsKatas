<?php 


function reverse($string) {
  // Your code here
      return implode(" ",array_reverse(explode(" ",$string))); 
}



var_dump(reverse("Hello World"));