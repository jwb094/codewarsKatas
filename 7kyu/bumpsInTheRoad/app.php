<?php


function bump($x) {
    # Good luck
   return (15 < substr_count($x,"n")) ? "Car Dead" : "Woohoo!" ;

}


var_dump(bump("n"));//, "Woohoo!");
var_dump(bump("__nn_nnnn__n_n___n____nn__nnn"));//, "Woohoo!");
var_dump(bump("nnn_n__n_n___nnnnn___n__nnn__"));//, "Woohoo!");
var_dump(bump("_nnnnnnn_n__n______nn__nn_nnn"));//, "Car Dead");
var_dump(bump("______n___n_"));//, "Woohoo!");
var_dump(bump("nnnnnnnnnnnnnnnnnnnnn"));//, "Car Dead");
