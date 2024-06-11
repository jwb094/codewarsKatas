<?php
function replaceAll($string) {
   return preg_replace('/#.*$/', '', $string);

}




var_dump(replaceAll("http://www.uol.com.br#teste"));//("http://www.uol.com.br", );
var_dump(replaceAll("www.ig.com.br"));//"www.ig.com.br"
var_dump(replaceAll("www.naoexiste.com#naoexiste"));//"www.naoexiste.com"
var_dump(replaceAll("abc#d"));//"abc"
var_dump(replaceAll("www.attser.com"));//"www.attser.com"
var_dump(replaceAll("www.indio.com#flecha"));//"www.indio.com"