function high(x) {
  let xWordCount = {};
  var myArray = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];

//split the string by space
 x=  x.split(' ');
//set initial sum value to 0 
let sum = 0;
//for each Word in the string
x.forEach(word => {
  //for each letter in the Word
  for (let letterindex = 0; letterindex < word.length; letterindex++) {
    //get the index of the letter from 
    let value = myArray.indexOf(word[letterindex]);
    //increment the sum variable
    sum += value+1;

    //added sum to array word index
    xWordCount[word] =  sum; 
  }
  //rest the sum to 0
  sum = 0;
});

  return String(Object.entries(xWordCount).sort(([,a],[,b])=>b-a)[0][0]);

}

console.info(high('man i need a taxi up to ubud'));
high('what time are we climbing up the volcano');
high('take me to semynak');
high('aa b');
high('b aa');
high('bb d');
high('d bb');
high('aaa b');
