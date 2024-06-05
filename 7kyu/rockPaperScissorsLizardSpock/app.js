
function RockPaperScissorsLizardSpock(pl1,pl2){
    let player1Index= 0; 
    let player2Index= 0;
    let Rslpindex  = {};
    let Rslp  = {};
    Rslp['rock'] = 0;
    Rslp['paper'] = 1;
    Rslp['scissors'] = 2;
    Rslp['lizard'] = 3;
    Rslp['spock'] = 4;    


    for (const key in Rslp) {

        Rslpindex[key]   = Rslp[key];
//        console.log(key);
  //      console.log(Rslp[key]);
    }
    //console.log(Rslpindex);


  for (const key in Rslpindex) {
        if (key === pl1) {
    
            player1Index = Rslpindex[key];
        }
        if (key === pl2) {
       
            player2Index = Rslpindex[key];
        }
  }
 // console.log(`Player1 = ${player1Index} Player2 =${player2Index}`);
    let whoWonTheBattle = [
        //(Computer)Rock Paper Scissors Lizard Spock
    /*(Player)rock */['D', 'C', 'P', 'P', 'C'],
          /*Paper */['P', 'D', 'C', 'C', 'P'],
        /*Scissors*/['C', 'P', 'D', 'P', 'C'],
          /*Lizard*/['C', 'P', 'C', 'D', 'P'],
           /*Spock*/['P', 'C', 'P', 'C', 'D']
    ];

    let result = whoWonTheBattle[player1Index][player2Index];


 //   console.log(`the result  =${result}`);

    return   result === "P" ? "Player 1 Won!" : result === "C" ? "Player 2 Won!"  : "Draw!";   
}




console.log(RockPaperScissorsLizardSpock('rock', 'lizard'));
console.log(RockPaperScissorsLizardSpock('paper', 'rock'));
console.log(RockPaperScissorsLizardSpock('scissors', 'lizard'));
console.log(RockPaperScissorsLizardSpock('lizard', 'paper'));
console.log(RockPaperScissorsLizardSpock('spock', 'rock'));



console.log(RockPaperScissorsLizardSpock('lizard','scissors'));//, 'Player 2 Won!')
console.log(RockPaperScissorsLizardSpock('spock','lizard'));//, 'Player 2 Won!')
console.log(RockPaperScissorsLizardSpock('paper','lizard'));//, 'Player 2 Won!')
console.log(RockPaperScissorsLizardSpock('scissors','spock'));//, 'Player 2 Won!')
console.log(RockPaperScissorsLizardSpock('rock','spock'));//, 'Player 2 Won!




console.log(RockPaperScissorsLizardSpock('rock','rock'));//, 'Draw!')
console.log(RockPaperScissorsLizardSpock('spock','spock'));//, 'Draw!')