function abbreviate(string) {
  // ...
string.replace(/\w{4,}/g, function(w){console.log(w)});
  //    console.log(string.split("-"));
  console.log(string.includes(" "));

  if (string.includes("-") | string.includes(" ")) {
    // string =  string.split("(/['.', '\\-', '_']/");
    string = string.split(" ");
    console.log(string);
    let abbre = [];
    for (let item of string) {
      item = item.replace(",", "");
      let l = item;
      if (item.length > 3) {
        if (item.includes("-")) {
            let hyphenSpace = [];
            item = item.split("-");
            
            for (let n of item) {
            
                diff = n.length - 2;
                n =(n.length > 3) ? `${n[0]}${diff}${n.slice(-1)}` : n;
        
                hyphenSpace.push(`${n}`);
            }
            abbre.push((hyphenSpace.join("-")));
        } else {
            diff = item.length - 2;
            abbre.push(`${l[0]}${diff}${l.slice(-1)}`);
        }

       
      } else {
        abbre.push(`${l}`);
      }
      console.log(abbre);
      //     let l = item;

      //     diff = item.length - 2;
      //     abbre.push(`${l[0]}${diff}${l.slice(-1)}`);
    }
    // return abbre.join("-")
  } else {
    diff = string.length - 2;
    return `${string[0]}${diff}${string.slice(-1)}`;
  }
}

//console.log(abbreviate("internationalization"));//, "i18n");
//console.log(abbreviate("accessibility"));//, "a11y");
//console.log(abbreviate("Accessibility"));//, "A11y");
//console.log(abbreviate("elephant-ride"));//, "e6t-r2e");
console.log(
  abbreviate("You need, need not want, to complete this code-wars mission")
); //'Y44e-w10n' to equal 'You n2d, n2d not w2t, to c6e t2s c2e-w2s m5n
