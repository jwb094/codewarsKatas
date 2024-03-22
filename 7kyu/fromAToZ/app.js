function gimmeTheLetters(sp) {
   // return null
    let firstLetter = sp.split("-").shift();
    let lastLetter = sp.split("-").pop(); 
    let startingPoint = firstLetter.charCodeAt();
    let endingPoint = lastLetter.charCodeAt();
    let alphabetRange = "";
    
    //same letter
    /*if(firstLetter === lastLetter){
        return firstLetter;
    }
    */
  
    //two letters
    
  
    // console.log(`${startingPoint} - ${endingPoint}`)
    
   
    //  if((endingPoint - startingPoint === 1)){
    //     return sp;
    // }

    console.log(sp.split("-"));
    //  if((firstLetter !== lastLetter) && ((endingPoint - startingPoint)  <= 2)){
    //     return sp;
    // }
    
        for (let index = startingPoint; index <= endingPoint; index++) {
        //   const element = array[index];
            //console.log(String.fromCharCode(index));
    
            alphabetRange =  alphabetRange.concat(`${String.fromCharCode(index)}`);
        }

    //  do {
    //    // index = startingPoint;
    //     //console.log(String.fromCharCode(index));
    //       console.log(startingPoint+1);
    //    // index++;
    //  } while (startingPoint >= endingPoint);
    console.log(alphabetRange);
  }


  console.log(gimmeTheLetters('J-J'));
  console.info(gimmeTheLetters('a-b'));
  console.info(gimmeTheLetters('g-i'));

  console.info(gimmeTheLetters('Q-Z'));