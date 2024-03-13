function alienLanguage(str){
    //coding here...
/*
    var words = str.split(" ");
    for (let index = 0; index < words.length; index++) {
        for (let v = 0; v < words[index].length; v++) {
        if (v == words[index].length -1 ) {
            words[index] = words[index].replace(words[index][v],words[index][v].toLowerCase());
        } else {
            words[index]=     words[index].replace(words[index][v],words[index][v].toUpperCase());
        }
        }

    }
return words.join(" ");*/

var words = str.split(" ");
for (let index = 0; index < words.length; index++) {
    //console.log(words[index]);
    words[index] = words[index].split("");
    console.log(words[index]);


}
//return words.join(" ");
  }
     // words[index]=      (v == words[index].length -1) ? words[index].replace(words[index][v],words[index][v].toLowerCase()) : words[index].replace(words[index][v],words[index][v].toUpperCase());
//console.log(alienLanguage("My name is John"));//.  "My NAMe Is JOHn");
//console.log(alienLanguage("this is an example"));//.  "THIs Is An EXAMPLe");
//console.log(alienLanguage("Hello World"));//.  "HELLo WORLd");
//console.log(alienLanguage("HELLO WORLD"));//.  "HELLo WORLd");


console.log(alienLanguage("xPbbivpe VuocJER NLDTOuNQDM tOEAQ RwMZMA oKQMqUkx KghyjElWK RlhBMvJw qCYzL WthhB ZaA cuNC UlgM"));//.  "HELLo WORLd");
//console.log(alienLanguage("HELLO WORLD"));//.  "HELLo WORLd");