function whoseMove(lastPlayer, win) {
    //coding and coding..
    
    if (lastPlayer === "black" && win === true) {return  "black"}
    if (lastPlayer === "black" && win === false) {return  "white"}
    if (lastPlayer === "white" && win === true) {return "white"}
    if (lastPlayer === "white" && win === false) {return "black"}


  //  result = (lastPlayer === "white" && win  === true) ?  "white": "black";
//   console.log(result);
   
    // return result;

    /**
     * Alternative MEthod logic for Alternative player
     */
  }


console.log(whoseMove("black",false));//,"white")

console.log(whoseMove("white",true));//,"white")

console.log(whoseMove("white",false));//,"black")