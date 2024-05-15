<?php

function DNA_strand($dna)
{
    // Your code here

    $output = "";
    $complementaryDNA = array(
        "A" => "T",
        "C" => "G",
    );





    foreach (str_split($dna) as $dna_key => $dna_value) {
        if (array_key_exists($dna_value, $complementaryDNA)) {
            $output .= $complementaryDNA[$dna_value];
        }
        if (in_array($dna_value, $complementaryDNA)) {
            $output .=  $key = array_search($dna_value, $complementaryDNA, true);
        }
    }
    return $output;
}







var_dump(DNA_strand("AAAA")); //TTTT
var_dump(DNA_strand("TTTT")); //AAAA
var_dump(DNA_strand("ATTGC")); //"TAACG"
var_dump(DNA_strand("TAACG")); //"ATTGC"
var_dump(DNA_strand("GTAT")); //"ATTGC"
var_dump(DNA_strand("CATA"));//"GTAT"