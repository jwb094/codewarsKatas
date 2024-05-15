<?php

function DNA_strand($dna) {
    // Your code here

    $output = "";
    $complementaryDNA = array(
        "A" => "T",
        "C" => "G",
    );





//foreach ($complementaryDNA as $key => $value) {

    foreach (str_split($dna) as $dna_key => $dna_value) {

        if (array_key_exists($dna_value,$complementaryDNA)){
          $output .= $complementaryDNA[$dna_value];
        }
        if (in_array($dna_value,$complementaryDNA)){
  //          print_r($complementaryDNA[$dna_key]);
            $output .=  $key = array_search($dna_value, $complementaryDNA, true);
           // print_r($output);
        }
        
        //  if(in_array($dna_value,$complementaryDNA)){
        //     print_r($dna_value);
        //  }
        // if($value === $dna_value) {
        //     print_r("value");
        // }
        // if($value === $dna_key) {
        //     print_r("key");
        // }
//strstr*()
    
    }
   // print_r($output);
//}
/*

    foreach (str_split($dna) as $key => $value) {
       // print_r($value);
        // if ($value === $complementaryDNA[$key]) {
        //     print_r($value);
        // }
        print_r($complementaryDNA[$key]);
        if (strpos($dna, $complementaryDNA[$key]) !== FALSE) {
            print_r($complementaryDNA[$key]);
        }

    }*/
return $output;
  }







  var_dump(DNA_strand("AAAA"));//TTTT
  var_dump(DNA_strand("TTTT"));//AAAA
  var_dump(DNA_strand("ATTGC"));//"TAACG"
  var_dump(DNA_strand("TAACG"));//"ATTGC"
  var_dump(DNA_strand("GTAT"));//"ATTGC"
  var_dump(DNA_strand("CATA"));//"GTAT"