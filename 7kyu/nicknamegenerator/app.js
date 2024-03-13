// function nicknameGenerator(name) {
//   //code goes here
//   if (name.length < 4) {
//     return "Error: Name too short";
//   } else {
//     name = name.split("");
//     if (name[2].match(/[a|e|i|o|u]/gi, "")) {
//       return name.slice(0, 4).join("");
//     } 
//     /*else if (name[2].match(/[y]/gi, "")) {
//       return " 'y' is not a vowel";
//     }*/ 
//     else {
//       return name.slice(0, 3).join("");
//     }
  
//   }
// }


function nicknameGenerator(name) {
    //code goes here
    if (name.length < 4) {
      return "Error: Name too short";
    } else {
      name = name.split("");
     return (name[2].match(/[a|e|i|o|u]/gi, "")) ? name.slice(0, 4).join("") :  name.slice(0, 3).join("");
     name[2].match(/[a|e|i|o|u]/gi, "")
    }
  }

///var variable = (name[2].match(/[a|e|i|o|u]/gi, "")) ? (true block) : ((name[2].match(/[y]/gi, "")) ?  'y' is not a vowel" : (name.slice(0, 3).join("")))

console.log(nicknameGenerator("Jimmy"));
console.log(nicknameGenerator("Samantha"));
console.log(nicknameGenerator("Sam"));
console.log(nicknameGenerator("Kayne"));
console.log(nicknameGenerator("Melissa"));
console.log(nicknameGenerator("James"));
