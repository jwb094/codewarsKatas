function colorOf(r, g, b) {
  //coding here
    //console.log(String(r.toString(16).padStart(2,"0")));
    //AttemptOne
 /* r = r.toString(16);
  r = r.length == 2 ? r : r.padStart(2, "0");
  g = g.toString(16);
  g = g.length == 2 ? g : g.padStart(2, "0");
  b = b.toString(16);
  b = b.length == 2 ? b : b.padStart(2, "0");


return `#${r}${g}${b}`;
*/

//Attempt 2
return `#${String(r.toString(16).padStart(2,"0"))}${String(g.toString(16).padStart(2,"0"))}${String(b.toString(16).padStart(2,"0"))}`;
}

console.log(colorOf(255, 0, 0)); //, "#ff0000");
console.log(colorOf(0, 111, 0)); //, "#006f00");
console.log(colorOf(1, 2, 3)); //, "#010203");
/*
convert to string = 
var num = 11;
var c = num+"";
*/
