function topSecret(str) {
  //coding here...
  var chars = str.split("");
//   for (let index = 0; index < chars.length; index++) {
//     var tmp = chars[index].charCodeAt();
//     if (tmp == 32) chars[index] = "";

//     if (tmp == 97)
//       chars[index] = String.fromCharCode(chars[index].charCodeAt() + 26);
//     if (tmp == 98)
//       chars[index] = String.fromCharCode(chars[index].charCodeAt() + 26);
//     if (tmp == 99)
//       chars[index] = String.fromCharCode(chars[index].charCodeAt() + 26);
//     // console.log(chars[index].charCodeAt() % 256);
//     chars[index] = String.fromCharCode(chars[index].charCodeAt() - 3);
//     //console.log(chars[index]);
//   }

//   return chars.join(" ");


  var decrypCharcs =str.split(/[ ,]+/);
//  console.log(decrypCharcs);
  for (let index = 0; index < decrypCharcs.length; index++) {
    var chars = decrypCharcs[index].split("");
    for (let value = 0; value < chars.length; value++) {
        var tmp = chars[value].charCodeAt();
        if (tmp > 97 && tmp < 123) {
            console.log(tmp)
        }
    if (tmp == 97)
      chars[value] = String.fromCharCode(chars[value].charCodeAt() + 26);
    if (tmp == 98)
      chars[value] = String.fromCharCode(chars[value].charCodeAt() + 26);
    if (tmp == 99)
      chars[value] = String.fromCharCode(chars[value].charCodeAt() + 26);
    // console.log(chars[index].charCodeAt() % 256);
    chars[value] = String.fromCharCode(chars[value].charCodeAt() - 3);
    //console.log(chars[index]);
    }

    decrypCharcs[index] = chars.join("");
  }

  console.log(decrypCharcs.join(" "));
    //console.log(String.fromCharCode(decrypCharcs[index][value].charCodeAt() - 3));
   // decrypCharcs[index][value] = String.fromCharCode(decrypCharcs[index][value].charCodeAt() - 3)
    //var tmp = decrypCharcs[index][value].charCodeAt();
   // console.log(tmp);
   // decrypCharcs[index] = String.fromCharCode(decrypCharcs[index][value].charCodeAt() - 3);
 // console.log(str.split(/[ ,]+/));

//   var chars = str.split("");
//     var newstring =  [];
//   for (let index = 0; index < chars.length; index++) {
//     console.log(newstring);

//     var tmp = chars[index].charCodeAt();
//     //console.log(tmp);
//     if (tmp == 32) newstring.push(" ");

//     if (tmp == 97)
//     newstring.push(String.fromCharCode(chars[index].charCodeAt() + 26));
//     if (tmp == 98)
//     newstring.push(String.fromCharCode(chars[index].charCodeAt() + 26));
//     if (tmp == 99)
//     newstring.push(String.fromCharCode(chars[index].charCodeAt() + 26));
//     // console.log(chars[index].charCodeAt() % 256);
//     newstring.push(String.fromCharCode(chars[index].charCodeAt() - 3));
//     //console.log(chars[index]);
//   }
//   console.log(newstring);
//   //return newstring.join(" ");
}

console.log(topSecret("Pb qdph lv Mrkq")); // "My name is John");
console.log(topSecret("wklv lv dq hadpsoh")); // "this is an example");
console.log(topSecret("Khoor Zruog!"));// "Hello World!");
