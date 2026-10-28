// You are an up and coming commentator in the brutal world of pro wrestling. However, you suck at telling who reversed the reversal.

// You will be provided with a string in the format of : "X hit a reversal to Y hit a reversal to X...... hit a reversal to (X/Y)"

// Rules:

// •The string starts and ends with the respective names of the wrestlers (Not necessary that the starting and ending names be the same).

// •Input will always be validated.

// •X and Y will either be letters or single words.

// Determine and return the victor of the match.

// Be careful. Your job is on the line!



function whowon(s) {
  const names = s.split(" hit a reversal to ");

   return names.length <= 2 
            ? names[0] 
            : names.sort((a,b) =>
            names.filter(v => v===a).length - names.filter(v => v===b).length
            ).shift();
}
