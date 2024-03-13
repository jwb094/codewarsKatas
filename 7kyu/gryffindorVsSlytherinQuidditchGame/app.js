function gameWinners(gryffindor, slytherin) {

    if (gryffindor[1] == 'yes') {
        gryffindor[0] = gryffindor[0] + 150 ;
    }

    if (slytherin[1] == 'yes') {
        slytherin[0] = slytherin[0] + 150; 
    }


    return (gryffindor[0] > slytherin[0]) ? "Gryffindor wins!" : (slytherin[0] > gryffindor[0]) ? "Slytherin wins!" :"It's a draw!";
    
};


console.log(gameWinners([100, 'yes'],[100, 'no']));//, "Gryffindor wins!")
console.log(gameWinners([350, 'no'],[250, 'yes']));//, "Slytherin wins!")
console.log(gameWinners([100, 'yes'],[250, 'no']));//, "It's a draw!")