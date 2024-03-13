function doubleChar(str) {
    // Your code here
    str = str.split("");
    for (let index = 0; index < str.length; index++) {
        str[index] = str[index].repeat(2);
    }
    return str.join("");
    console.log();

  }
  /*
  
  could use map 
  * */

      console.log(doubleChar("abcd"));//, "aabbccdd");
    console.log(doubleChar("Adidas"));//, "AAddiiddaass");
    console.log(doubleChar("1337"));//, "11333377");
    console.log(doubleChar("illuminati"));//, "iilllluummiinnaattii");
    console.log(doubleChar("123456"));//, "112233445566");
    console.log(doubleChar("%^&*("));//, "%%^^&&**((");