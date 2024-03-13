function reverseLetter(str) {
    //coding and coding..
    console.log(str.replace(/[\W_]/g,'').split("").reverse().join(""));
    return str.replace(/[\W_0-9]/g,'').split("").reverse().join("");
    //return str.replace(/[|)*_&\/-\\#,+()$~%.'":*?<>{}0-9]/g,'').split("").reverse().join("");
  }
  //|)*!,+.^!_-


console.log(reverseLetter("krishan"));//,"nahsirk")
console.log(reverseLetter("ultr53o?n"));//,"nortlu")
console.log(reverseLetter("ab23c"));//,"cba")
console.log(reverseLetter("krish21an"));//,"nahsirk")
console.log(reverseLetter( "m]a(_bz3ldaeleq=yeb*hraoyoaqqdzi|xgmo?codwxw2rmoaw"));//,"waomrwxwdocomgxizdqqaoyoarhbeyqeleadlzbam")