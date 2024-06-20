<?php
function solution($str, $ending) {
if(strlen($ending) > strlen($str)) return false;
if($ending === '') return true;
  return (substr($str, -strlen($ending))  === $ending) ? true : false ;
  
}