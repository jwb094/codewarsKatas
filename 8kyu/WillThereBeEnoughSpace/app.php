<?
function enough(int $cap, int $on, int $wait):int {
  // your code here]
     return   ($cap > ($on + $wait)) ? 0 : (($on + $wait) - $cap);

}