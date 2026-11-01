Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

Examples (Input -> Output):
* "String"      -> "SSttrriinngg"
* "Hello World" -> "HHeelllloo  WWoorrlldd"
* "1234!_ "     -> "11223344!!__  "
Good Luck!

<?php

function doubleChar(string $str): string {
  // Your code here
  return implode("",
            array_map(function ($d){
                return  $d.$d;
            }
                ,str_split($str,1)
            )
        );
}