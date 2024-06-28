function solution(number) {
    var romanNumberEncoderString ="";
    let RomanNumberalNumberAndValue = [];
    let RomanNumberalsSelectedValues = [];
    var isdigitSingle = false;
   // var romanNumerals = { "I": 1, "V": 5, "X": 10, "L":50, "C": 100, "D": 500, "M": 1000 };

    var romanNums = { 1:"I", 5:"V", 10:"X", 50:"L", 100:"C", 500:"D", 1000:"M" };
    for(const [key, value] of Object.entries(romanNums)) {
      //  RomanNumberalNumberAndValue[key] = value;
        RomanNumberalNumberAndValue.push(key,value);
    
    }


  const RomanNumberalNumberAndValueChunks = [];
for (let i = 0; i < RomanNumberalNumberAndValue.length; i += 2) {
    RomanNumberalNumberAndValueChunks.push(RomanNumberalNumberAndValue.slice(i, i + 2));
}
 // console.log(RomanNumberalNumberAndValueChunks);


  var romanNumeralInts = [1, 5, 9,10,50, 100, 500,1000];
  const chunks = [];
  // convert the number to a roman numeral
  //if number is a single digit or greater
  if (number.toString().length < 2) {
    isdigitSingle = true;
  }

  if (isdigitSingle === true) {
    const chunkSize = 2;
    //Split array into chunks
    for (let i = 0; i < romanNumeralInts.length; i += chunkSize) {
      chunks.push(romanNumeralInts.slice(i, i + chunkSize));
    }
    //console.log(chunks);

        for (let index = 0; index < chunks.length; index++) {
            //check that the number is within the range of number 
            const beginning = chunks[index][0];
            const end = chunks[index][1];
            if (number >= beginning && number <= end) {



                //console.log(romanNumerals.includes(number));
                for (let i = 0; i < RomanNumberalNumberAndValueChunks.length; i++) {
                    //console.log(RomanNumberalNumberAndValueChunks[i])
                    //romanNumberEncoderString.concat()
                   // console.log(number >= RomanNumberalNumberAndValueChunks[i] );
                     if (number >= RomanNumberalNumberAndValueChunks[i][0]) {
                        console.log( RomanNumberalNumberAndValueChunks[i] );
                        RomanNumberalsSelectedValues.push(Number(RomanNumberalNumberAndValueChunks[i][0]));

                    }    
                }
        }

            
        }

  }


//
  console.log( RomanNumberalsSelectedValues.sort(function(a, b){return b-a} ));
  
  let remainder = number - RomanNumberalsSelectedValues[0];
  
  console.log( remainder);
  /**
   * 1. split numbers into array
   * e.g. 23456 = 2,3,4,5,6
   * 2.depend on length of array add  0to the end
   * by loop through
   * 3loopthough each number to check if match range
   *
   *
   * or look how many times the number can divide e.g. 8 goes in 5 =1 / remainin 3
   * e.g. 2000 goes into 1000 2 times
   */
}

console.log(solution(1));
//console.log(solution(2));
// console.log(solution(3));
// console.log(solution(4));
console.log(solution(5));
//console.log(solution(9));
// console.log(solution(10));
// console.log(solution(11));
// console.log(solution(19));
// console.log(solution(22));
// console.log(solution(15));

// console.log(solution(1000));
// console.log(solution(1001));
// console.log(solution(1990));
// console.log(solution(2007));
// console.log(solution(2008));



        //console.log(RomanNumberalNumberAndValueChunks[i][1]);
                      //console.log(number / RomanNumberalNumberAndValueChunks[i][0]);
                    //   if(number !== 5){
                    //     console.log(RomanNumberalNumberAndValueChunks[i][1].repeat(number));
                    //   }else{
                    //     console.log(RomanNumberalNumberAndValueChunks[i][1]);
                    //   }
                    
                        //console.log(romanNumberEncoderString);