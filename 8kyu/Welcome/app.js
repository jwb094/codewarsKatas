function greet(language) {
	const DB = { "english" : "Welcome", "czech" :"Vitejte" , "danish": "Velkomst", "dutch": "Welkom", "estonian":"Tere tulemast", "finnish": "Tervetuloa","flemish": "Welgekomen", "french":"Bienvenue", "german": "Willkommen","irish":"Failte", "italian": "Benvenuto","latvian": "Gaidits", "lithuanian": "Laukiamas", "polish": "Witamy", "spanish":"Bienvenido","swedish":"Valkommen","welsh":"Croeso"};
   // console.log(language);
    //console.log(DB);
    const pairs = Object.entries(DB);
    // console.log(pairs);
    let chosenLang= "";
    pairs.forEach(element => {
       // console.log(element[0]);
        // chosenLang = element[0] == language ? element[1];
        if ( element[0] == language ) {
            chosenLang =  element[1];
        } 
        //  else{
        //     chosenLang = "Welcome";
        // }

    });
    //console.log(chosenLang.length);

    return chosenLang.length == 0 ? "Welcome" : chosenLang;
}


console.log(greet('english'));
console.log(greet('dutch'));
console.log(greet('IP_ADDRESS_INVALID'));