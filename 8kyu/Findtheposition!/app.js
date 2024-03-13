function position(letter){
    alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
console.log(letter.charCodeAt()-96);
    console.log(alphabet.indexOf(letter));

    return "Position of alphabet: "+ (alphabet.indexOf(letter) +1);
}



console.log(position("a"));
console.log(position("z"));
console.log(position("e"));
