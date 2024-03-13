function convert(number){
    number = number.match(/.{1,2}/g);
    let output ="";
    for (let index = 0; index < number.length; index++) {
        output += String.fromCharCode(number[index]);
    }

return output;
  }


  function convert(number){
    // ...Convert integers given as string into ASCII uppercase letters...

    //console.log(number.split("",2));
    return number.match(/.{1,2}/g).map((x) => String.fromCharCode(x)).join("");

  }


  console.log(convert("65"));//,"A")
  console.log(convert("656667"));//,"ABC")
  console.log(convert("676584"));//,"CAT")
  console.log(convert("73327673756932858080698267658369"));//,"I LIKE UPPERCASE")