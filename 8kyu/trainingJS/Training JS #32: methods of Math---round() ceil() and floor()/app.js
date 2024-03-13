function roundIt(n){
    //coding here...
    console.log(n.toString().split('.'));
    let num = n.toString().split("");
    //console.log(n.toString().split("").indexOf("."));
    //console.log(n.toString().split(""))
    //console.log(num.length)

    //distant between the decimal and the end(right)
   // console.log((num.length-1) - n.toString().split("").indexOf(".") )
   // console.log(n.toString().split("").indexOf(".") - 0)

    let fromBeginningToDecimalPoint = n.toString().split("").indexOf(".") - 0;
    let fromDecimalPointToEnd = (n.toString().split("").length-1) - n.toString().split("").indexOf(".")

    if (fromBeginningToDecimalPoint < fromDecimalPointToEnd) { return Math.ceil(n)}
    if (fromBeginningToDecimalPoint > fromDecimalPointToEnd ) {return Math.floor(n)}
    if (fromBeginningToDecimalPoint === fromDecimalPointToEnd) {return Math.round(n)}
    //console.log(`${fromBeginningToDecimalPoint}  - ${fromDecimalPointToEnd}`);
  }

  console.log(roundIt(3.45));
  console.log(roundIt(34.5));
  console.log(roundIt(34.56));