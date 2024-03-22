function gimmeTheLetters(sp) {
    let firstLetter = sp.split("-").shift().charCodeAt();
    let lastLetter = sp.split("-").pop().charCodeAt(); 
    let alphabetRange = "";
    
        for (let index = firstLetter; index <= lastLetter; index++) {
            alphabetRange =  alphabetRange.concat(`${String.fromCharCode(index)}`);
        }
    console.log(alphabetRange);
  }


  console.log(gimmeTheLetters('J-J'));
  console.info(gimmeTheLetters('a-b'));
  console.info(gimmeTheLetters('g-i'));

  console.info(gimmeTheLetters('Q-Z'));