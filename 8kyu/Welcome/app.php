<?php

/**
* The Task
* Think of a way to store the languages as a database. The languages are listed below so you can copy and paste!
* Write a 'welcome' function that takes a parameter 'language', with a type String, and returns a greeting - if you have it in your database. It should default to English if the language is not in the database, or in the event of an invalid input.
* The Database
 * 
 * @param string $language
 * @return string
 */
function greet(string $language): string {

    $DB = [
        "english" => "Welcome",
    "czech" =>"Vitejte" ,
    "danish"=> "Velkomst", 
    'dutch'=>"Welkom",
     "estonian"=>"Tere tulemast", 
     "finnish"=> "Tervetuloa",
     "flemish"=> "Welgekomen", 
     "french"=>"Bienvenue", 
     "german"=> "Willkommen",
     "irish"=>"Failte", 
     "italian"=> "Benvenuto",
     "latvian"=> "Gaidits", 
     "lithuanian"=> "Laukiamas", 
     "polish"=> "Witamy", "spanish"=>"Bienvenido",
     "swedish"=>"Valkommen"
    ,"welsh"=>"Croeso"];
    $chosenLang= "";

    foreach($DB as $key => $value){

        if($key === $language){
        $chosenLang= $DB[$key];
        }
    }

    return isset($chosenLang) & $chosenLang !== "" ? $chosenLang  :"Welcome";
}