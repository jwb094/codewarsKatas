
<?php
 function dutyFree(int $normalPrice, int $discount, int $holiday): int {
  // your code here  

 return  floor($holiday / (($normalPrice * $discount) / 100));
}