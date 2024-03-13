function timeCorrect(timestring) {


   if (timestring === null || timestring === "") {
      return null;
   }

    if ( timestring.search(/[0-9]{0,2}:[0-9]{0,2}:[0-9]{0,2}/i) !== true ) {
     return null;
    }
    
    console.log(timestring);
 }
/*

convert to string toString()
convert to int Number()
 */

// Null or Empty
console.log(timeCorrect(null));//, null);
console.log(timeCorrect(""));//, "");

// Invalid Format
console.log(timeCorrect("001122"));//, null);
console.log(timeCorrect("00;11;22"));//, null);
console.log(timeCorrect("0a:1c:22"));// null);

// Correction Tests
// console.log(timeCorrect("09:10:01"));//, "09:10:01");
// console.log(timeCorrect("11:70:10"));//, "12:10:10");
// console.log(timeCorrect("19:99:09"));//, "20:39:09");
// console.log(timeCorrect("19:99:99"));//, "20:40:39");
// console.log(timeCorrect("24:01:01"));//, "00:01:01");
// console.log(timeCorrect("52:01:01"));//, "04:01:01");