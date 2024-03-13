function convert(number){
    // ...Convert integers given as string into ASCII uppercase letters...

    //console.log(number.split("",2));
    console.log(number.match(/.{1,2}/g).map((x) => String.fromCharCode(x)).join(""));
    return number.match(/.{1,2}/g).map((x) => String.fromCharCode(x)).join("");
//     number = number.match(/.{1,2}/g);
//     console.log(number);
//     //console.log(number.match(/.{1,2}/g));
//     let output ="";

//     for (let index = 0; index < number.length; index++) {
//         //const element = array[index];
//         console.log(String.fromCharCode(number[index]));
//         output += String.fromCharCode(number[index]);
        
//     }
//     console.log(output);
// return output;
  }


  console.log(convert("65"));//,"A")
  console.log(convert("656667"));//,"ABC")
  console.log(convert("676584"));//,"CAT")
  console.log(convert("73327673756932858080698267658369"));//,"I LIKE UPPERCASE")