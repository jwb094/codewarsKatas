function abbreviate(string) {
  // ...


 
  if (string.includes("-") | string.includes(" ")) {
    string = string.split(" ");
    let abbre = [];
    for (let word of string) {
      word = word.replace(",", "");
      let l = word;
      if (word.length > 3) { // If Word length is greater than 3
        if (word.includes("-")) { //
            let hyphenSpace = [];
            word = word.split("-");
            for (let n of word) {
                diff = n.length - 2;
                n =(n.length > 3) ? `${n[0]}${diff}${n.slice(-1)}` : n;
                hyphenSpace.push(`${n}`);
            }
            abbre.push((hyphenSpace.join("-")));
        } else {
            diff = word.length - 2;
            abbre.push(`${l[0]}${diff}${l.slice(-1)}`);
        }
      } else {
        abbre.push(`${l}`);
      }

    }
    return abbre.join(" ").replace(",","")
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
