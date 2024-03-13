/*function SubstringTest(str1, str2)
{

    let letters = str2.split("");
     str1 = str1.split("");
    console.log(letters);

    let totalCount = 0;
        for (let str2index = 0; str2index < letters.length; str2index++) {
            let OppositeCaseLEtter = letters[str2index] == letters[str2index].toLowerCase() ? letters[str2index].toUpperCase() : letters[str2index].toLowerCase() ;
            (str1.includes(OppositeCaseLEtter) ||   str1.includes(letters[str2index])) ? totalCount++ : 0 ;
        }
        return totalCount == str1.length ? true : false;

  //Code goes here!
}
*/

function SubstringTest(str1, str2) {
  let counter = 0;
  let str1Substrings = [];
  let str2Substrings = [];

  for (let index = 0; index < str1.length; index++) {
   str1Substrings.push(str1.toLowerCase().slice(index, index+2));
  }


  for (let index = 0; index < str2.length; index++) {
    str2Substrings.push(str1.toLowerCase().slice(index, index+2));
   }

  console.log(str1Substrings);
  //console.log(str2Substrings);
  // for (const key in str2Substrings) {
  //   str1.includes(str2Substrings[key].toLowerCase()) ||
  //   str1.includes(str2Substrings[key].toUpperCase())
  //     ? counter++
  //     : 0;
  // }

  // for (let str1_i = 0; str1_i < str1Substrings.length; str1_i++) {
  //   console.log(str1Substrings[str1_i]);
  //  for (let str2_i = 0; str2_i < str2Substrings.length; str1_2++) {
  
  //  }
    
  // }



  return counter > 0 ? true : false ;
  console.log(counter);
  // if (str1.includes(str2.toUpperCase()) || str1.includes(str2.toLowerCase())) {
  //     return true;
  // } else {

  //     // if (str2.length > 3) {
  //     //     console.log("n");
  //     //     let substrings = str2.split('');
  //     //     str2.match(/.{1}/g);

  //     // } else {
  //     //     return false;
  //     // }
  // }
  //console.log(str1);
  // const str1spilt = str1.split("");
  // for(let i = 0; i < str1spilt.length; i++){

  //     //console.log(str1spilt);
  //     if(str2.includes(str1spilt[i])){
  //         console.log(str1spilt[i]);
  //        //do something like add to another list.
  //     }
  //   }
}
console.log(SubstringTest("Something", "Home"));
console.log(SubstringTest("Something", "Fun"));
console.log(SubstringTest("Something", "in"));
