function scoreboard(string) {

    let stringNumbertoInt =[ "nil" ,
    "one",
    "two",
    "three", 
    "four",
    "five" ,
    "six" ,
    "seven",
    "eight", 
    "nine"
   ];
   let scores = string.split(" ").slice(-2);
for (let index = 0; index < scores.length; index++) {
if (stringNumbertoInt.includes(scores[index])) {
    scores[index] = stringNumbertoInt.indexOf(scores[index]);
 }
}

return scores;
    // code here!
    
//     const breakpoint = `/(?:,| | goal )+`;
    
//     let splitted = string.split(breakpoint);
// console.log(splitted);

// let splitted = string.split(" ").slice(-2);

// for (let index = 0; index < splitted.length; index++) {
   // const element = array[index];
//   if (stringNumbertoInt.includes(splitted[index])) {
    //console.log(stringNumbertoInt.indexOf(splitted[index]));
    // splitted[index] = stringNumbertoInt.indexOf(splitted[index]);
//   }
   // console.log(stringNumbertoInt.includes(splitted[index]));


    
// }

//console.log(splitted);
//console.log(splitted);

//let arr = splitted.slice(-2); 

//console.log(splitted);
  }


  console.log(scoreboard("The score is four nil"));
  console.log(scoreboard("new score: two three"));
  console.log(scoreboard("two two"));
  console.log(scoreboard("Arsenal just conceded another goal, two nil"));