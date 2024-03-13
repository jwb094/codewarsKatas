function topSecret(str) {
  //coding here...

  var decrypCharcs = str.split(/[ ,]+/);

  for (let index = 0; index < decrypCharcs.length; index++) {
    var chars = decrypCharcs[index].split("");
    
    for (let wordvalueindex = 0;wordvalueindex < chars.length;wordvalueindex++) {
      var tmp = chars[wordvalueindex].charCodeAt();


      if (tmp >= 65 && tmp <= 122) {
        if (tmp == 97)
        chars[wordvalueindex] = String.fromCharCode(chars[wordvalueindex].charCodeAt() + 26
        );
      if (tmp == 98)
        chars[wordvalueindex] = String.fromCharCode(chars[wordvalueindex].charCodeAt() + 26
        );
      if (tmp == 99)
        chars[wordvalueindex] = String.fromCharCode(  chars[wordvalueindex].charCodeAt() + 26);

      chars[wordvalueindex] = String.fromCharCode(chars[wordvalueindex].charCodeAt() - 3);
    } 
    }

    decrypCharcs[index] = chars.join("");
  }

  return decrypCharcs.join(" ");
}

console.log(topSecret("Pb qdph lv Mrkq")); // "My name is John");
console.log(topSecret("wklv lv dq hadpsoh")); // "this is an example");
console.log(topSecret("Khoor Zruog!")); // "Hello World!");
